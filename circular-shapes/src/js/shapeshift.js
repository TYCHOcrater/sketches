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
        
    }
}