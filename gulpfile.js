'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['style'], function () {
  gulp.watch('./style/**/*.scss', ['style']);
  gulp.watch('./public/**/*.html', ['reload']);

  return browserSync({
    notify: false,
    open: false,
    ghostMode: false,

    server: {
      baseDir: './public/',
    }
  });
}); 

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('style', function () {
  return gulp.src('./style/main.scss')
    .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.reload({stream: true}));
});
