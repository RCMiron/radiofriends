var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect');
    gulpif = require('gulp-if');
    uglify = require('gulp-uglify');              //minifies js in production
    minifyHTML = require('gulp-minify-html');

var htmlSources = ['public/*.html'];

gulp.task('connect', function(){
  connect.server({
    root: 'public/',
    livereload: true
  });
});

gulp.task('html', function(){
  gulp.src(htmlSources)
    .pipe(connect.reload())
    .pipe(minifyHTML());
});

gulp.task('watch', function(){
  gulp.watch(htmlSources, ['html'])
})

gulp.task('default', ['connect','html', 'watch']);
