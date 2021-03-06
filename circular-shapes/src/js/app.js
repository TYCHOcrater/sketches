import TweenMax from 'gsap'

import Shapeshift from './shapeshift.js'
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
            this.shapes.push(new Shapeshift(
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
              document.getElementsByClassName(`shapeshift`), element => new Shapeshift(element, {
                rings: 20,
                anchors: 18,
                length: 1,
                minRingScale: 0
              }
            ))
          }
      
        // render & animation ticker
        TweenMax.ticker.fps(60)
        TweenMax.ticker.addEventListener(`tick`, () => { this.tick() })
      
        // resize
        window.addEventListener(`resize`, () => { this.resize() }, false)
    }

    tick() {
        this.update()
        this.draw()
    }
    
    update() {
        this.shapes.forEach(s => s.update())
    }
    
    draw() {
        this.shapes.forEach(s => s.draw())
    }
    
    resize() {
        this.shapes.forEach(s => s.resize())
    }
}

export const app = new App()