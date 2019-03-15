'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cssNano = require('gulp-cssnano'),
    htmlMin = require('gulp-htmlmin'),
    jspm = require('jspm'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    runSeq = require('run-sequence'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('build', function(done) {
    runSeq('clean', ['buildsass', 'buildimg', 'buildjs'], 'buildhtml', 'shaders', 'models', done);
});

gulp.task('buildsass', function() {
    gulp.src(global.paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(autoprefixer())
        .pipe(cssNano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(global.paths.dist));
});

// // Build JS for distribution.
// gulp.task('buildjs', function () {
//   gulp.src('./src/js/app.js')
//     .pipe(jspm({
//       selfExecutingBundle: true,
//       minify: true,
//       skipSourceMaps: true
//     }))
//     .pipe(rename('app.min.js'))
//     .pipe(gulp.dest(global.paths.dist));
// });

gulp.task('buildjs', function() {
    var builder = new jspm.Builder({
        baseURL: "./src"
    });

    builder.leadConfig('./src/jspm.config.js').then(function(){
        var compileJs = builder.buildStatic('js/app.js', './dist/app.min.js' , {
            minify: true,
            sourceMaps: false
        });
    });
});

gulp.task('buildhtml', function() {
    gulp.src(global.paths.html)
        .pipe(replace('css/app.css', 'app.min.js'))
        .pipe(replace('lib/system.js', 'app.min.js'))
        .pipe(replace('<script src="config.js"></script>', ''))
        .pipe(replace("<script>System.import('.js/app')</script>", ''))
        //.pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest(global.paths.dist));
});

gulp.task('buildimg', function() {
    gulp.task(global.paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(global.paths.dist + '/img'));
});

gulp.task('shaders', () => {
    return gulp.src(global.paths.shaders)
        .pipe(gulp.dest(global.paths.dist + '/shaders'));
});

gulp.task('models', () => {
    return gulp.src(global.paths.models)
        .pipe(gulp.dest(global.paths.dist + '/models'));
});