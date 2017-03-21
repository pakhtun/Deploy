var gulp = require('gulp')
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
 
gulp.task('jscs', () => {
    gulp.src('/home/ktuser/Deploy/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter('fail'));
});


gulp.task('jshint', function() {
   gulp.src('/home/ktuser/Deploy/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});



gulp.task('test', () =>
   gulp.src('/home/ktuser/Deploy/test/test.js', {read: false})
     .pipe(mocha())
);


