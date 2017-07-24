var gulp = require('gulp'),
    gutil = require('gulp-util'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('css/styles.css')
             .pipe(cleanCss({compatibility: 'ie8'}))
             .pipe(gulp.dest('dist'));
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('js/*.js')
         .pipe(uglify())
         .pipe(gulp.dest('dist'))
});

// Run all tasks at once
gulp.task('default', ['minify-css', 'minify-js'], function(){
  return gutil.log('All tasks completed.');
});
