var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins

gulp.task('css', function() {
  var processors = [

  ];

  return gulp.src('css/src/*.css')
    .pipe( postcss(processors) )
    .pipe(gulp.dest('css/dest'));
});

gulp.task('default', function() {
  gulp.watch('css/src/*.css', ['css']);
});
