
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('sassCompile', function () {
  gulp.src('./res/style/sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./res/style'));
});
 
gulp.task('tsCompile', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});

gulp.task('jsCompress', ['tsCompile'], function() {
  gulp.src('./scripts/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['*-min.js']
    }))
    .pipe(gulp.dest('./scripts/'))
});

gulp.task('compile', ['tsCompile', 'sassCompile', 'jsCompress']);

gulp.task('sass:watch', function () {
  gulp.watch('./res/style/sass/*.scss', ['sassCompile']);
});