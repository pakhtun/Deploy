var gulp = require('gulp')
var gutil = require('gulp-util');

var gulp = require('gulp');
var mocha = require('gulp-mocha');
 
gulp.task('test', () =>
    gulp.src('/home/ktuser/Deploy/test/test.js', {read: false})
        .pipe(mocha())
);


