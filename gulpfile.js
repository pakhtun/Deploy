var gulp = require('gulp')
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');
var stylishcs = require('gulp-jscs-stylish');
 
gulp.task('tester', () => {
	gulp.src('/home/ktuser/Deploy/*.js')
    .pipe(jscs())
		.pipe(stylishcs());

	gulp.src('/home/ktuser/Deploy/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));

	gulp.src('/home/ktuser/Deploy/test/test.js', {read: false})
     .pipe(mocha())

});





/*gulp.task('jscs', () => {
   gulp.src('/home/ktuser/Deploy/*.js')
    .pipe(jscs())
		.pipe(stylishcs());
});


gulp.task('jshint', function() {
   gulp.src('/home/ktuser/Deploy/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
		//.pipe(jshint.reporter(fail));
});


gulp.task('test', () =>
   gulp.src('/home/ktuser/Deploy/test/test.js', {read: false})
     .pipe(mocha())
);*/


