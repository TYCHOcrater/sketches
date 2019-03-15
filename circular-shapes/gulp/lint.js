'use strict'

var gulp = require('gulp')
    cache = require('gulp-cached'),
    eslint = require('gulp-eslint'),
    sassLint = require('gulp-sass-lint');

gulp.task('lintjs', function() {
    return gulp.src(global.paths.js)
        .pipe(cache('lingjs'))
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('lintsass', function() {
    return gulp.src(global.paths.sass)
        .pipe(cache('lintsass'))
        .pipe(sassLint())
        .pipe(sassLint.format());
});

gulp.task('lint', ['lintjs', 'lintsass']);