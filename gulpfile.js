var gulp = require('gulp');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');
var del = require('del');

// Plugins
var rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');
var atImport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var svgFragments = require('postcss-svg-fragments');

gulp.task('default', function() {
  gulp.watch('css/src/**/*.css', ['css_dev']);
}); 

//Delete CSS files before built
gulp.task('cleanCssFiles', function() {
  return del(['css/dest/*' ]);
});

//CSS production => minified
gulp.task('css_prod',runSequence('cleanCssFiles'), function() {
  var processors = [
  	atImport,
    cssnext({browsers: 'last 3 versions'}),
  	svgFragments
  ];
  return gulp.src('css/src/_imports.css')
    .pipe( postcss(processors) )
    .pipe(rename('app.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/dest'));
});

//CSS dev => not minified
gulp.task('css_dev', function() {
  var processors = [
  	atImport,
    cssnext({browsers: 'last 3 versions'}),
  	svgFragments
  ];
  return gulp.src('css/src/_imports.css')
    .pipe( postcss(processors) )
    .pipe(rename('app.css'))
    .pipe(gulp.dest('css/dest'));
});



