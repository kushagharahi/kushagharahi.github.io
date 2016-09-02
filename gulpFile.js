
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


gulp.task('sassCompile', function () {
  gulp.src('./res/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./res/style'));
});
 
gulp.task('tsCompile', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});

gulp.task('compile', ['tsCompile', 'sassCompile']);