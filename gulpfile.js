var gulp = require('gulp');



gulp.task('RedaTask', function(){
    
    return gulp.src('js/scripts.js')
    .pipe(gulp.dest('css'))
});