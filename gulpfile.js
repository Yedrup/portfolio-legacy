var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext');
var atImport = require('postcss-import');
gulp.task('css', function() {
  var processors = [
  	atImport,
  	cssnext
  ];

  return gulp.src('css/src/*.css')
    .pipe( postcss(processors) )
    .pipe(gulp.dest('css/dest'));
});

gulp.task('default', function() {
  gulp.watch('css/src/*.css', ['css']);
});
