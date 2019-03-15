'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: global.paths.src,
        livereload: true
    });
});