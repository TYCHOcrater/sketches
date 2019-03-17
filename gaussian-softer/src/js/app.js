import $ from 'jquery'
import _ from 'lodash'
import TweenMax from 'gsap'
import 'dat-gui'

// import three and make it global
// so plugins can hook onto the namespace THREE
import THREE from 'three'
window.THREE = THREE

import EffectComposer from 'three/postprocessing/EffectComposer'
import CopyShader from 'three/shaders/CopyShader'
import VignetteShader from 'three/shaders/VignetteShader'
import HorizontalBlurShader from 'three/shaders/HorizontalBlurShader'
import VerticalBlurShader from 'three/shaders/VerticalBlurShader'
import RenderPass from 'three/postprocessing/RenderPass'
import ShaderPass from 'three/postprocessing/ShaderPass'
import MaskPass from 'three/postprocessing/MaskPass'

import { BlurScene } from './blur-scene.js'
import { HeroScene } from './hero-scene.js'
