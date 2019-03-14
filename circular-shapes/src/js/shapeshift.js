import paper from 'paper'

import { mergeDeep } from './utils.js'

export default class Shapeshift {
    constructor(element, config) {
        this.element = element
        this.config = config

        this.defaults = {
            anchors: 10,
            rings: 10,
            length: 1,
            minRingScale: 0,
            smooth: true,
            debug: false,
            center: [0.5, 0.5],
            ringstyle: {
                alphaMode: `none`,
                alphaModeMin: 0,
                strokeColor: `#000`,
                strokeWidth: 1,
                strokeCap: `round`
            },
            animation: {
                speed: 0.1,
                reposition: `random`,
                interval: 750
            }
        }

        this.config = mergeDeep(this.defaults, this.config)

        this.time = 0

        this.setup()
        this.resize()
    }

    setup() {
        if(this.canvas) return

        this.canvas = document.createElement(`canvas`)
        this.scope = new paper.PaperScope()
        this.scope.setup(this.canvas)
        this.element.appendChild(this.canvas)
    }

    init() {
        if(!this.canvas) return

        if(this.scope) this.reset()

        this.scope.activate()

        this.anchors = []
        this.targets = []

        this.center = new this.scope.Point(this.sceneWidth * this.config.center[0], this.sceneHeight * this.config.center[1])

        const helper = new this.scope.Path.Ellipse(
            new this.scope.Rectangle(new this.scope.Point(0, 0),
            new this.scope.Size(this.sceneWidth, this.sceneHeight)))
        helper.scale(0.99)
        

        for(let i = 0; i < this.config.anchors; i++)
            this.anchors.push(helper.getPointAt(i * helper.length / this.config.anchors))

        if(this.config.length < 1)
            this.anchors.push(this.anchors[0].clone())

        this.recalculateTargets()

        this.path = new this.scope.Path(Object.assign({
            segments: this.targets,
            visible: false,
            close: this.config.length >= 1
        }, this.config.ringstyle))

        if(typeof this.config.ringstyle.strokeColor !== `string`)
            this.path.strokeColor = this.generateGradient(this.config.ringstyle.strokeColor[0], this.config.ringstyle.strokeColor[1])

        if(this.config.smooth)
            this.path.smooth()

        if(this.config.length < 1)
            this.path.splitAt(this.path.length * this.config.length)

        this.copies = []
        for(let i = 0; i < this.config.rings; i++) {
            var copy = this.path.clone()
            copy.visible = true
            this.copies.push(copy)
        }

        if(this.config.debug) {
            helper.selected = true
            this.path.selected = true
            new this.scope.Path.Circle({ center: this.center, radius: 3, fillColor: 'green' })
            this.targetDebugCircles = this.targets.map(target => new this.scope.Path.Circle({ center: target, radius: 3, fillColor: 'red' }))
        }

        if(typeof this.config.ringstyle.strokeColor !== `string` && this.config.ringstyle.alphaMode !== `none`)
            throw new Error(`Using alphaMode and a gradient stroke color is not supported.`)
    }

    reset() {
        if(!this.scope) return

        this.scope.activate()

        this.scope.project.activeLayer.removeChildren()

        this.path = null
        this.copies = null
    }

    update() {
        if(!this.path) return

        if(Date.now() > this.time + this.config.animation.interval) {
            this.time = Date.now()
            this.config.animation.reposition === `all` ? this.recalculateTargets() : this.recalculateRandomTarget()
        }

        this.path.segments.forEach((segments, i) => {
            const dx = this.targets[i].x - segment.point.x
            const dy = this.targets[i].y - segment.point.y
            const angle = Math.atan2(dy, dx)
            const velX = Math.cos(angle) * this.config.animation.speed
            const velY = Math.sin(angle) * this.config.animation.speed

            this.path.segments[i].point.x += velX
            this.path.segments[i].point.y += velY
        })

        this.copies.forEach((copy, i) => {
            copy.segments = this.path.segments
            copy.scale(1 - (i * (1 - this.config.minRingScale) / this.config.rings))

            copy.strokeColor = typeof this.config.ringstyle.strokeColor !== `string`
                ? this.generateGradient(this.config.ringstyle.strokeColor[0], this.config.ringstyle.strokeColor[1])
                : this.config.ringstyle.strokeColor

            if(this.config.ringstyle.alphaMode === `fade-out`)
                copy.strokeColor.alpha = this.config.ringstyle.alphaModeMin + (i * (1 - this.config.ringstyle.alphaModeMin) / this.config.rings)

            if(this.config.ringstyle.alphaMode === `fade-in`)
                copy.strokeColor.alpha = 1 - (i * (1 - this.config.ringstyle.alphaModeMin) / this.config.rings)
        })
    }

    draw() {
        if(!this.scope) return

        this.scope.activate()
        this.scope.view.draw()
    }

    resize() {
        if(!this.scope) return

        this.sceneWidth = this.element.offsetWidth
        this.sceneHeight = this.element.offsetHeight

        this.scope.view.viewSize.width = this.sceneWidth
        this.scope.view.viewSize.height = this.sceneHeight

        this.init()
    }

    recalculateTargets() {
        this.targets = this.anchors.map(anchor => this.midpoint(this.center, anchor, 0.15 + (Math.random() * 0.85)))
        if(this.config.debug) this.repositionDebugTargets()
    }

    recalculateRandomTarget() {
        const randomIndex = parseInt(Math.round(Math.random() * (this.targets.length - 1)), 10)
        this.targets[randomIndex] = this.midpoint(this.center, this.anchors[randomIndex], 0.15 + (Math.random() * 0.85))
        if(this.config.debug) this.repositionDebugTargets()
    }

    repositionDebugTargets() {
        if(!this.targetDebugCircles) return
        this.targetDebugCircles.forEach((circle, i) => {
            circle.position = this.targets[i]
        })
    }

    midpoint(center, anchor, perc) {
        return new this.scope.Point(center.x + (anchor.x - center.x) * perc, center.y + (anchor.y - center.y) * perc)
    }

    generateGradient(up, down) {
        return {
            gradient: {
                stops: [up, down]
            },
            origin: [0, 0],
            destination: [0, this.sceneHeight]
        }
    }
}