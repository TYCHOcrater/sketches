System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "lib/github/*",
    "npm:*": "lib/npm/*"
  },

  packages: {
    "three": {
      "map": {
        "./loaders/collada/Animation": "./examples/js/loaders/collada/Animation.js",
        "./loaders/collada/AnimationHandler": "./examples/js/loaders/collada/AnimationHandler.js",
        "./loaders/collada/KeyFrameAnimation": "./examples/js/loaders/collada/KeyFrameAnimation.js",
        "./loaders/ColladaLoader": "./examples/js/loaders/ColladaLoader.js",
        "./loaders/ColladaLoader2": "./examples/js/loaders/ColladaLoader2.js",
        "./loaders/OBJLoader": "./examples/js/loaders/OBJLoader.js",
        "./loaders/MTLLoader": "./examples/js/loaders/MTLLoader.js",
        "./loaders/OBJMTLLoader": "./examples/js/loaders/OBJMTLLoader.js",
        "./controls/DeviceOrientationControls": "./examples/js/controls/DeviceOrientationControls.js",
        "./Detector": "./examples/js/Detector.js",
        "./postprocessing/AdaptiveToneMappingPass": "./examples/js/postprocessing/AdaptiveToneMappingPass.js",
        "./postprocessing/BloomPass": "./examples/js/postprocessing/BloomPass.js",
        "./postprocessing/BokehPass": "./examples/js/postprocessing/BokehPass.js",
        "./postprocessing/ClearPass": "./examples/js/postprocessing/ClearPass.js",
        "./postprocessing/DotScreenPass": "./examples/js/postprocessing/DotScreenPass.js",
        "./postprocessing/EffectComposer": "./examples/js/postprocessing/EffectComposer.js",
        "./postprocessing/FilmPass": "./examples/js/postprocessing/FilmPass.js",
        "./postprocessing/GlitchPass": "./examples/js/postprocessing/GlitchPass.js",
        "./postprocessing/ManualMSAARenderPass": "./examples/js/postprocessing/ManualMSAARenderPass.js",
        "./postprocessing/MaskPass": "./examples/js/postprocessing/MaskPass.js",
        "./postprocessing/RenderPass": "./examples/js/postprocessing/RenderPass.js",
        "./postprocessing/SavePass": "./examples/js/postprocessing/SavePass.js",
        "./postprocessing/ShaderPass": "./examples/js/postprocessing/ShaderPass.js",
        "./postprocessing/SMAAPass": "./examples/js/postprocessing/SMAAPass.js",
        "./postprocessing/TAARenderPass": "./examples/js/postprocessing/TAARenderPass.js",
        "./postprocessing/TexturePass": "./examples/js/postprocessing/TexturePass.js",
        "./shaders/BasicShader": "./examples/js/shaders/BasicShader.js",
        "./shaders/BleachBypassShader": "./examples/js/shaders/BleachBypassShader.js",
        "./shaders/BlendShader": "./examples/js/shaders/BlendShader.js",
        "./shaders/BokehShader": "./examples/js/shaders/BokehShader.js",
        "./shaders/BokehShader2": "./examples/js/shaders/BokehShader2.js",
        "./shaders/BrightnessContrastShader": "./examples/js/shaders/BrightnessContrastShader.js",
        "./shaders/ColorCorrectionShader": "./examples/js/shaders/ColorCorrectionShader.js",
        "./shaders/ColorifyShader": "./examples/js/shaders/ColorifyShader.js",
        "./shaders/CompositeShader": "./examples/js/shaders/CompositeShader.js",
        "./shaders/ConvolutionShader": "./examples/js/shaders/ConvolutionShader.js",
        "./shaders/CopyShader": "./examples/js/shaders/CopyShader.js",
        "./shaders/DigitalGlitch": "./examples/js/shaders/DigitalGlitch.js",
        "./shaders/DOFMipMapShader": "./examples/js/shaders/DOFMipMapShader.js",
        "./shaders/DotScreenShader": "./examples/js/shaders/DotScreenShader.js",
        "./shaders/EdgeShader": "./examples/js/shaders/EdgeShader.js",
        "./shaders/EdgeShader2": "./examples/js/shaders/EdgeShader2.js",
        "./shaders/FilmShader": "./examples/js/shaders/FilmShader.js",
        "./shaders/FocusShader": "./examples/js/shaders/FocusShader.js",
        "./shaders/FresnelShader": "./examples/js/shaders/FresnelShader.js",
        "./shaders/FXAAShader": "./examples/js/shaders/FXAAShader.js",
        "./shaders/GammaCorrectionShader": "./examples/js/shaders/GammaCorrectionShader.js",
        "./shaders/HorizontalBlurShader": "./examples/js/shaders/HorizontalBlurShader.js",
        "./shaders/HorizontalTiltShiftShader": "./examples/js/shaders/HorizontalTiltShiftShader.js",
        "./shaders/HueSaturationShader": "./examples/js/shaders/HueSaturationShader.js",
        "./shaders/KaleidoShader": "./examples/js/shaders/KaleidoShader.js",
        "./shaders/LuminosityShader": "./examples/js/shaders/LuminosityShader.js",
        "./shaders/MirrorShader": "./examples/js/shaders/MirrorShader.js",
        "./shaders/NormalMapShader": "./examples/js/shaders/NormalMapShader.js",
        "./shaders/OceanShaders": "./examples/js/shaders/OceanShaders.js",
        "./shaders/ParallaxShader": "./examples/js/shaders/ParallaxShader.js",
        "./shaders/RGBShiftShader": "./examples/js/shaders/RGBShiftShader.js",
        "./shaders/SepiaShader": "./examples/js/shaders/SepiaShader.js",
        "./shaders/SMAAShader": "./examples/js/shaders/SMAAShader.js",
        "./shaders/SSAOShader": "./examples/js/shaders/SSAOShader.js",
        "./shaders/TechnicolorShader": "./examples/js/shaders/TechnicolorShader.js",
        "./shaders/ToneMapShader": "./examples/js/shaders/ToneMapShader.js",
        "./shaders/TriangleBlurShader": "./examples/js/shaders/TriangleBlurShader.js",
        "./shaders/UnpackDepthRGBAShader": "./examples/js/shaders/UnpackDepthRGBAShader.js",
        "./shaders/VerticalBlurShader": "./examples/js/shaders/VerticalBlurShader.js",
        "./shaders/VerticalTiltShiftShader": "./examples/js/shaders/VerticalTiltShiftShader.js",
        "./shaders/VignetteShader": "./examples/js/shaders/VignetteShader.js"
      },
      "meta": {
        "examples/js/loaders/collada/Animation.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.Animation",
          "format": "global"
        },
        "examples/js/loaders/collada/AnimationHandler.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.AnimationHandler",
          "format": "global"
        },
        "examples/js/loaders/collada/KeyFrameAnimation.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.KeyFrameAnimation",
          "format": "global"
        },
        "examples/js/loaders/ColladaLoader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ColladaLoader",
          "format": "global"
        },
        "examples/js/loaders/ColladaLoader2.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ColladaLoader",
          "format": "global"
        },
        "examples/js/loaders/OBJLoader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.OBJLoader",
          "format": "global"
        },
        "examples/js/loaders/MTLLoader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.MTLLoader",
          "format": "global"
        },
        "examples/js/loaders/OBJMTLLoader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.OBJMTLLoader",
          "format": "global"
        },
        "examples/js/controls/DeviceOrientationControls.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.DeviceOrientationControls",
          "format": "global"
        },
        "examples/js/controls/Detector.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.Detector",
          "format": "global"
        },
        "examples/js/postprocessing/AdaptiveToneMappingPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.AdaptiveToneMappingPass",
          "format": "global"
        },
        "examples/js/postprocessing/BloomPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BloomPass",
          "format": "global"
        },
        "examples/js/postprocessing/BokehPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BokehPass",
          "format": "global"
        },
        "examples/js/postprocessing/ClearPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ClearPass",
          "format": "global"
        },
        "examples/js/postprocessing/DotScreenPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.DotScreenPass",
          "format": "global"
        },
        "examples/js/postprocessing/EffectComposer.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.EffectComposer",
          "format": "global"
        },
        "examples/js/postprocessing/FilmPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.FilmPass",
          "format": "global"
        },
        "examples/js/postprocessing/GlitchPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.GlitchPass",
          "format": "global"
        },
        "examples/js/postprocessing/ManualMSAARenderPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ManualMSAARenderPass",
          "format": "global"
        },
        "examples/js/postprocessing/MaskPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.MaskPass",
          "format": "global"
        },
        "examples/js/postprocessing/RenderPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.RenderPass",
          "format": "global"
        },
        "examples/js/postprocessing/SavePass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.SavePass",
          "format": "global"
        },
        "examples/js/postprocessing/ShaderPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ShaderPass",
          "format": "global"
        },
        "examples/js/postprocessing/SMAAPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.SMAAPass",
          "format": "global"
        },
        "examples/js/postprocessing/TAARenderPass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.TAARenderPass",
          "format": "global"
        },
        "examples/js/postprocessing/TexturePass.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.TexturePass",
          "format": "global"
        },
        "examples/js/shaders/BasicShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BasicShader",
          "format": "global"
        },
        "examples/js/shaders/BleachBypassShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BleachBypassShader",
          "format": "global"
        },
        "examples/js/shaders/BlendShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BlendShader",
          "format": "global"
        },
        "examples/js/shaders/BokehShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BokehShader",
          "format": "global"
        },
        "examples/js/shaders/BokehShader2.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BokehShader2",
          "format": "global"
        },
        "examples/js/shaders/BrightnessContrastShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.BrightnessContrastShader",
          "format": "global"
        },
        "examples/js/shaders/ColorCorrectionShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ColorCorrectionShader",
          "format": "global"
        },
        "examples/js/shaders/ColorifyShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ColorifyShader",
          "format": "global"
        },
        "examples/js/shaders/CompositeShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.CompositeShader",
          "format": "global"
        },
        "examples/js/shaders/ConvolutionShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ConvolutionShader",
          "format": "global"
        },
        "examples/js/shaders/CopyShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.CopyShader",
          "format": "global"
        },
        "examples/js/shaders/DigitalGlitch.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.DigitalGlitch",
          "format": "global"
        },
        "examples/js/shaders/DOFMipMapShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.DOFMipMapShader",
          "format": "global"
        },
        "examples/js/shaders/DotScreenShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.DotScreenShader",
          "format": "global"
        },
        "examples/js/shaders/EdgeShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.EdgeShader",
          "format": "global"
        },
        "examples/js/shaders/EdgeShader2.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.EdgeShader2",
          "format": "global"
        },
        "examples/js/shaders/FilmShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.FilmShader",
          "format": "global"
        },
        "examples/js/shaders/FocusShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.FocusShader",
          "format": "global"
        },
        "examples/js/shaders/FresnelShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.FresnelShader",
          "format": "global"
        },
        "examples/js/shaders/FXAAShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.FXAAShader",
          "format": "global"
        },
        "examples/js/shaders/GammaCorrectionShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.GammaCorrectionShader",
          "format": "global"
        },
        "examples/js/shaders/HorizontalBlurShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.HorizontalBlurShader",
          "format": "global"
        },
        "examples/js/shaders/HorizontalTiltShiftShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.HorizontalTiltShiftShader",
          "format": "global"
        },
        "examples/js/shaders/HueSaturationShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.HueSaturationShader",
          "format": "global"
        },
        "examples/js/shaders/KaleidoShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.KaleidoShader",
          "format": "global"
        },
        "examples/js/shaders/LuminosityShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.LuminosityShader",
          "format": "global"
        },
        "examples/js/shaders/MirrorShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.MirrorShader",
          "format": "global"
        },
        "examples/js/shaders/NormalMapShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.NormalMapShader",
          "format": "global"
        },
        "examples/js/shaders/OceanShaders.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.OceanShaders",
          "format": "global"
        },
        "examples/js/shaders/ParallaxShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ParallaxShader",
          "format": "global"
        },
        "examples/js/shaders/RGBShiftShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.RGBShiftShader",
          "format": "global"
        },
        "examples/js/shaders/SepiaShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.SepiaShader",
          "format": "global"
        },
        "examples/js/shaders/SMAAShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.SMAAShader",
          "format": "global"
        },
        "examples/js/shaders/SSAOShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.SSAOShader",
          "format": "global"
        },
        "examples/js/shaders/TechnicolorShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.TechnicolorShader",
          "format": "global"
        },
        "examples/js/shaders/ToneMapShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.ToneMapShader",
          "format": "global"
        },
        "examples/js/shaders/TriangleBlurShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.TriangleBlurShader",
          "format": "global"
        },
        "examples/js/shaders/UnpackDepthRGBAShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.UnpackDepthRGBAShader",
          "format": "global"
        },
        "examples/js/shaders/VerticalBlurShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.VerticalBlurShader",
          "format": "global"
        },
        "examples/js/shaders/VerticalTiltShiftShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.VerticalTiltShiftShader",
          "format": "global"
        },
        "examples/js/shaders/VignetteShader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.VignetteShader",
          "format": "global"
        }
      }
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "dat-gui": "npm:dat-gui@0.5.0",
    "extract-svg-path": "npm:extract-svg-path@2.1.0",
    "gsap": "npm:gsap@1.18.0",
    "jquery": "npm:jquery@2.2.0",
    "load-svg": "npm:load-svg@1.0.0",
    "lodash": "npm:lodash@4.0.0",
    "mesh-reindex": "npm:mesh-reindex@1.0.0",
    "pixi.js": "npm:pixi.js@3.0.6",
    "svg-mesh-3d": "npm:svg-mesh-3d@1.0.1",
    "three": "github:mrdoob/three.js@master",
    "three-simplicial-complex": "npm:three-simplicial-complex@69.0.6",
    "unindex-mesh": "npm:unindex-mesh@2.0.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:CSSselect@0.4.1": {
      "CSSwhat": "npm:CSSwhat@0.4.7",
      "domutils": "npm:domutils@1.4.3"
    },
    "npm:CSSwhat@0.4.7": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:big-rat@1.0.2": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "bn.js": "npm:bn.js@2.2.0",
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:box-intersect@1.0.1": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:brfs@1.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "quote-stream": "npm:quote-stream@0.0.0",
      "resolve": "npm:resolve@1.1.6",
      "static-module": "npm:static-module@1.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@0.4.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cdt2d@1.0.0": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "robust-in-sphere": "npm:robust-in-sphere@1.1.3",
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:cheerio@0.17.0": {
      "CSSselect": "npm:CSSselect@0.4.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dom-serializer": "npm:dom-serializer@0.0.1",
      "entities": "npm:entities@1.1.1",
      "htmlparser2": "npm:htmlparser2@3.7.3",
      "lodash": "npm:lodash@2.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:clean-pslg@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2",
      "box-intersect": "npm:box-intersect@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0",
      "nextafter": "npm:nextafter@1.0.0",
      "rat-vec": "npm:rat-vec@1.1.0",
      "robust-segment-intersect": "npm:robust-segment-intersect@1.0.1",
      "union-find": "npm:union-find@1.0.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:concat-stream@1.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:dom-serializer@0.0.1": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domhandler@2.2.1": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.4.3": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.0.1",
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:double-bits@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:earcut@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:entities@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escodegen@1.3.3": {
      "esprima": "npm:esprima@1.1.1",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:extract-svg-path@2.1.0": {
      "cheerio": "npm:cheerio@0.17.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsesc": "npm:jsesc@0.5.0",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "static-module": "npm:static-module@1.3.1",
      "through2": "npm:through2@2.0.1",
      "xml-parse-from-string": "npm:xml-parse-from-string@1.0.0"
    },
    "npm:falafel@1.1.0": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:gsap@1.18.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:htmlparser2@3.7.3": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "domhandler": "npm:domhandler@2.2.1",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.14",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-function@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:load-svg@1.0.0": {
      "xhr": "npm:xhr@1.17.1"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nextafter@1.0.0": {
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:normalize-path-scale@2.0.0": {
      "bound-points": "npm:bound-points@1.0.0",
      "unlerp": "npm:unlerp@1.0.1"
    },
    "npm:parse-headers@2.0.1": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pixi.js@3.0.6": {
      "async": "npm:async@0.9.2",
      "brfs": "npm:brfs@1.4.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "earcut": "npm:earcut@2.0.1",
      "eventemitter3": "npm:eventemitter3@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "resource-loader": "npm:resource-loader@1.6.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:quote-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.4.2"
    },
    "npm:rat-vec@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:resource-loader@1.6.0": {
      "async": "npm:async@0.9.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "eventemitter3": "npm:eventemitter3@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:robust-in-sphere@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-orientation@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-scale@1.0.2": {
      "two-product": "npm:two-product@1.0.2",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:robust-segment-intersect@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:static-module@1.1.2": {
      "concat-stream": "npm:concat-stream@1.4.8",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.0",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:static-module@1.3.1": {
      "concat-stream": "npm:concat-stream@1.4.10",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.1",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.34",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:svg-mesh-3d@1.0.1": {
      "bound-points": "npm:bound-points@1.0.0",
      "cdt2d": "npm:cdt2d@1.0.0",
      "clean-pslg": "npm:clean-pslg@1.1.0",
      "normalize-path-scale": "npm:normalize-path-scale@2.0.0",
      "object-assign": "npm:object-assign@4.1.0",
      "parse-svg-path": "npm:parse-svg-path@0.1.1",
      "random-float": "npm:random-float@1.0.0",
      "simplify-path": "npm:simplify-path@1.1.0",
      "svg-path-contours": "npm:svg-path-contours@2.0.0"
    },
    "npm:svg-path-contours@2.0.0": {
      "abs-svg-path": "npm:abs-svg-path@0.1.1",
      "adaptive-bezier-curve": "npm:adaptive-bezier-curve@1.0.3",
      "normalize-svg-path": "npm:normalize-svg-path@0.1.0",
      "vec2-copy": "npm:vec2-copy@1.0.0"
    },
    "npm:three-simplicial-complex@69.0.6": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:typedarray-pool@1.1.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dup": "npm:dup@1.0.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xhr@1.17.1": {
      "global": "npm:global@4.3.0",
      "once": "npm:once@1.1.1",
      "parse-headers": "npm:parse-headers@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    }
  }
});
