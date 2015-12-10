var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var gutil = require('gulp-util');

gulp.task('normalize', function(){
    gulp.src(['bower_components/normalize-css/normalize.css'])
        .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
    gulp.src(['src/coffee/**/*.coffee'])
        .pipe(coffee().on('error', function(err){
            gutil.log(gutil.colors.red(err));
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', ['normalize'], function() {
    gulp.src(['src/sass/**/*.scss'])
        .pipe(sass().on('error', function(err){
            gutil.log(gutil.colors.red('Error in SASS syntax'));
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('content', function() {
    gulp.src(['src/jade/**/*.jade', '!src/jade/layouts/**'])
        .pipe(jade().on('error', function(err){
            gutil.log(gutil.colors.red(err));
        }))
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['scripts', 'styles', 'content'], function() {
  gulp.watch('src/coffee/**', ['scripts']);
  gulp.watch('src/sass/**', ['styles']);
  gulp.watch('src/jade/**', ['content']);
});
