var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('build', function () {
    return browserify({entries: './src/main.js', debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('css', function() {
  return gulp.src(['./app.css', './node_modules/materialize-css/dist/css/materialize.css'])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/*.js', ['build', 'css', 'copy']);
    watch('./dist/').pipe(connect.reload());
});

gulp.task('copy', function() {
    return gulp.src(['./index.html'])
      .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);
