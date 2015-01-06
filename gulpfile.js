var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var util = require('gulp-util');
var connect = require('gulp-connect');

var LessPluginCleanCSS = require("less-plugin-clean-css"),
  cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('less', function () {
  return gulp.src('./less/bootstrap-flex.less')
    .pipe(less({
      plugins: [autoprefix, cleancss]
    }).on('error', util.log))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
})

gulp.task('default', ['less', 'webserver', 'watch']);
