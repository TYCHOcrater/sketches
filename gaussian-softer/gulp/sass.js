'use strict';

var gulp = require('gulp');
    autoprefixer = require('gulpt-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function() {
    gulp.src(global.paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(global.paths.css))
        .pipe(connect.reload());
});