import _ from 'lodash'
import THREE from 'three'

export class BlurScene {
  constructor(canvasWidth, canvasHeight, renderer, colors) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.renderer = renderer

    this.camera = null
    this.scene = null
    this.meshes = []

    this.colors = colors

    this.init()
  }