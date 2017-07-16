var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var atImport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var svgFragments = require('postcss-svg-fragments');

gulp.task('css', function() {
  var processors = [
  	atImport,
  	cssnext({browsers: 'last 3 versions'}),
  	svgFragments
  ];

  return gulp.src('css/src/*.css')
    .pipe( postcss(processors) )
    .pipe(gulp.dest('css/dest'));
});

gulp.task('default', function() {
  gulp.watch('css/src/*.css', ['css']);
});
