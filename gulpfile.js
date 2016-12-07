var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'public/',
    livereload: true
  });
})
