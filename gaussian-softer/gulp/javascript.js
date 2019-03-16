'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('js', function() {
    gulp.src(global.paths.js)
        .pipe(connect.reload());
});