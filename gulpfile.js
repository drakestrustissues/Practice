var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var LOCAL_SERVER_PORT = 8081;

gulp.task('sass', function() {
    console.log('sass');
  gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('server', function() {
    connect.server({
        port: LOCAL_SERVER_PORT,
        root: 'dist',
        livereload: true
    });
});
 
gulp.task('watch', ['server'], function() {
  livereload.listen({basepath:'dist/'});
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('dist/*.html', function(){
      console.log('html changed');
     livereload.reload();      
  });
});