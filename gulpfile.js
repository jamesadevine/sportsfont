var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    sass: 'scss/sports.scss',
    build: 'build/'
};

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass({
          outputStyle: "compact"
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('test', ['sass']);

gulp.task('default', ['test']);
