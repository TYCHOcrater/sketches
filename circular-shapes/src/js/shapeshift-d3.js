import * as d3 from 'd3'

import { mergeDeep } from './utils.js'

export default class Shapeshift {
    constructor(element, config) {
        this.element = element
        this.config = config

        this.defaults = {
            anchors: 18,
            rings: 20,
            minRingScale: 0,
            debug: false,
            ringstyle: {
                alphaMode: `fade-out`,
                alphaModeMin: 0,
                strokeColor: `#000`,
                dashArray: ``,
                strokeWidth: 1,
                strokeCap: `round`
            },
            speed: 0.01
        }

        this.config = mergeDeep(this.defaults, this.config)

        if(this.config.length !== undefined)
            throw new Error(`Shapeshifter: .length config parameter has been removed an thus gets ignired.`)

        if(this.config.smooth !== undefined)
            throw new Error(`Shapeshifter: .smooth config parameter has been removed an thus gets ignored.`)

        if(this.config.center !== undefined)
            throw new Error(`Shapeshifter: .center config parameter has been removed an thus gets ignored.`)

        this.time = 0

        this.setup()
        this.resize()
    }

    setup() {
        this.sceneWidth = this.element.offsetWidth
        this.sceneHeight = this.element.offsetHeight

        this.currentData = []
        this.fromData = this.generateRandomPathData()
        this.toData = this.generateRandomPathData()

        this.paths = []

        this.curveEquation = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveBasisClosed)

        this.svg = d3.select(this.element).append(`svg`).attr(`viewBox`, `0 0 ${this.sceneWidth} ${this.sceneHeight}`).attr(`style`, `width: 100%; height: 100%`)

        for (let i = 0; i < this.fromData.length; i++) {
            this.currentData[i] = this.fromData[i].slice(0)

            let alpha = 1
            if(this.config.ringstyle.alphaMode === `fade-out`) alpha = this.config.ringstyle.alphaModeMin + (i * (1 - this.config.ringstyle.alphaModeMin) / this.config.rings)
            if(this.config.ringstyle.alphaMode === `fade-in`) alpha = 1 - (i * (1 - this.config.ringstyle.alphaModeMin) / this.config.rings)
            
            this.paths.push(this.svg.append(`path`).attr(`d`, this.curveEquation(this.currentData[i])).attr(`stroke`, this.config.ringstyle.strokeColor).attr(`stroke-dasharray`, this.config.ringstyle.dashArray).attr(`stroke-width`, this.config.ringstyle.strokeWidth).attr(`stroke-linecap`, this.config.ringstyle.strokeCap).attr(`stroke-opacity`, alpha).attr(`fill`, `none`))
        }
    }

    update() {
        const outerRingStart = this.fromData[0],
            outerRingEnd = this.toData[0]

        let outerRing = this.currentData[0],
            progress = 0

        this.time += this.config.speed

        for(let i = 0; i < outerRing.length; i++) {
            progress = (Math.sin(this.time + 1) + 1) / 2
            outerRing[i] = this.midpoint(outerRingStart[i][0], outerRingStart[i][1], outerRingEnd[i][0], outerRingEnd[i][1], progress)
        }

        this.currentData = this.mirrorOuterRingData(this.currentData)
    }

    draw() {
        for(let i = 0; i < this.currentData.length; i++)
            this.paths[i].attr(`d`, this.curveEquation(this.currentData[i]))
    }

    resize() {
        this.sceneWidth = this.element.offsetWidth
        this.sceneHeight = this.element.offsetHeight
    }

    generateRandomPathData() {
        const sceneHalf = this.sceneWidth / 2,
            maxRadius = sceneHalf,
            anglePerAnchor = Math.PI * 2 / this.config.anchors

        let data = [],
            anchors = [],
            ring, anchor, radius

        for(ring = 0; ring < this.config.rings; ring++) {
            anchors = []

            for(let anchor = 0; anchor < this.config.anchors; anchor++) {
                radius = Math.random() * maxRadius
                anchors.push([
                    sceneHalf + (Math.cos(anglePerAnchor * anchor) * radius),
                    sceneHalf + (Math.sin(anglePerAnchor * anchor) * radius)
                ])
            }

            data.push(anchors)
        }

        return this.mirrorOuterRingData(data)
    }

    mirrorOuterRingData(data) {
        if(this.config.rings <= 1) return data

        const sceneHalf = this.sceneWidth / 2,
            outerRing = data[0],
            inwardOffsetPerRing = (1 - this.config.minRingScale) / this.config.rings

        let ring, anchor
            outerAnchor,
            inwardOffset

        for(ring = 1; ring < this.config.rings; ring++) {
            inwardOffset = ring * inwardOffsetPerRing

            for(anchor = 0; anchor < this.config.anchors; anchor++) {
                outerAnchor = outerRing[anchor]
                data[ring][anchor] = this.midpoint(outerAnchor[0], outerAnchor[1], sceneHalf, sceneHalf, inwardOffset)
            }
        }

        return data
    }

    midpoint(x0, y0, x1, y1, perc) {
        return [x0 + ((x1 - x0) * perc), y0 + ((y1 - y0) * perc)]
    }
}