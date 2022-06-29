var gulp = require('gulp');
var ts = require('gulp-typescript');
 
function buildScript(){
    return gulp.src('ts/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('js'));
}

function watchTask(){
    gulp.watch(['ts/**/*.ts'], buildScript);
}

exports.default = gulp.series(buildScript, watchTask)