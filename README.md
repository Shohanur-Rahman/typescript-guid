# typescript-guid
- init npm
- install type script gulp
```
//Install gulp CLI
npm install --global gulp-cli
//Install gulp in the project dependency
npm install gulp@4
//Install gulp-typescript & TypeScript
npm install gulp-typescript typescript
```
- config gulpfile.js
```
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
```
- hit gulp in vs code


# Project Structue

- initialize typescript configuration file
```
tsc --init
```
- Enable rootDir and out outDir