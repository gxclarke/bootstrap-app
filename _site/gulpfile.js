var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var zip = require('gulp-zip');
var debug = require('gulp-debug');
var deploy = require('gulp-gh-pages');

var LessPluginCleanCSS = require("less-plugin-clean-css"),
  cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('less', function () {
  gulp.src('./less/bootstrap-app.less')
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(less({
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('archive', function () {
  gulp.src('./less/**')
  //.pipe(debug())
  .pipe(zip('bootstrap-app.zip'))
  .pipe(gulp.dest('./dist/archive'))
});

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', ['less', 'archive']);
});

gulp.task('webserver', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('deploy', function () {
  return gulp.src('./docs/**/*')
    .pipe(deploy());
});

gulp.task('default', ['less', 'webserver', 'watch']);
