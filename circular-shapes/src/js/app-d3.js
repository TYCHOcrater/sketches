import TweenMax from 'gsap'

import Shapeshift from './shapeshift-d3.js'
import { hasClass } from './utils.js'

class App {
    constructor() {
        this.config = {}

        this.shapes = []

        this.init()
        this.resize()
    }

    init() {
        if(hasClass(document.getElementsByTagName(`body`)[0], `ina`)) {
            this.shapes.push(new Shapeshift (
                document.getElementsByClassName(`shapeshift`)[0], {
                    anchors: 15,
                    rings: 30,
                    minRingScale: 0.25,
                    length: 0.8,
                    center: [0.55, 0.35],
                    ringstyle: {
                        strokeColor: `#fff`,
                        strokeWidth: 1,
                        dashArray: [1, 2],
                        strokeCap: `round`
                    }
                }))
        } else {
            this.shapes = [].map.call(
                document.getElementsByClassName(`shapeshift`), element => new Shapeshift(element)
            )
        }

        TweenMax.ticker.fps(60)
        TweenMax.ticker.addEventListener(`tick`, () => { this.tick() })

        window.addEventListener(`resize`, () => { this.resize() }, false)
    }

    tick() {
        this.update()
        this.draw()
    }

    update() {
        this.shapes.forEach(s => s.update())
    }

    resize() {
        this.shapes.forEach(s => s.resize())
    }
}

export const app = new App()