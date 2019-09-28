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
var cssnano = require('cssnano');

gulp.task('default', function () {
  gulp.watch('css/src/**/*.css', ['css_dev']);
});

//Delete CSS files before built
gulp.task('cleanCssFiles', function () {
  return del(['css/dest/*']);
});

//clean www directory
gulp.task('cleanWWW', function () {
  return del(['www']);
});

gulp.task('css_prod', ['cleanWWW'] , function () {
  var processors = [
    atImport,
    cssnext({
      browsers: 'last 3 versions'
    }),
    svgFragments,
	  cssnano
  ];
  return gulp.src('css/src/_imports.css')
    .pipe(postcss(processors))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('www/css/'))
    .pipe(gulp.src(['css/font-awesome/**','.htaccess','index.html','document/*', 'pages/**', 'img/**'], {
      base: '.'
    })
    .pipe(gulp.dest('www/')))
});

//CSS dev => not minified
gulp.task('css_dev', ['cleanWWW'],  function () {
  var process = [
    atImport,
    cssnext({
      browsers: 'last 3 versions'
    }),
    svgFragments
  ];
  return (
    gulp.src('css/src/_imports.css')
    .pipe(postcss(process))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('www/css/'))
    .pipe(gulp.src(['./css/font-awesome/**','./index.html','./document/*', './pages/**', './img/**'], {
      base: '.'
    }).pipe(gulp.dest('www/')))
  )
});