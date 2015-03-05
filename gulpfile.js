var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var serve      = require('gulp-serve');

var sources = ['./src/app.js'];

console.log(sources);

gulp.task('browserify', function () {
	browserify({ entries: sources, paths: ['./src'] })
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['browserify']);
});

gulp.task('copy', function() {
   gulp.src('src/**/*.{css,html}')
   .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['browserify', 'watch', 'copy'], serve({
	root: 'dist',
	port: 3001
}));

gulp.task('default', ['browserify', 'watch', 'copy']);
