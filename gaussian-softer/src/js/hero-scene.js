import THREE from 'three'

export class HeroScene {
  constructor(canvasWidth, canvasHeight, renderer) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.renderer = renderer

    this.clock = null
    this.camera = null
    this.scene = null

    this.letters = null

    this.startValues = [
      {                       // LETTER O
        position: {x: -1.35, y: 0.48, z: -0.36},
        rotation: {x:  0.19, y: 0.00, z:  0.00},
        scale:    {x:  0.84, y: 1.39, z:  1.00}
      }, {                    // LETTER F
        position: {x: -0.66, y: -0.84, z: 0.00},
        rotation: {x:  0.00, y:  1.09, z: 0.21},
        scale:    {x:  1.00, y:  1.00, z: 1.00}
      }, {                    // LETTER F
        position: {x:  0.44, y:  0.52, z: -1.35},
        rotation: {x: -0.09, y: -0.58, z: -0.18},
        scale:    {x:  1.00, y:  1.78, z:  1.00}
      }, {                    // LETTER F
        position: {x: 0.74, y: -1.10, z: -0.69},
        rotation: {x: 0.06, y:  0.15, z:  0.05},
        scale:    {x: 1.00, y:  1.00, z:  1.00}
      }
    ]

    this.init()
  }