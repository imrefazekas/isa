var gulp = global.gulp = require('gulp'),
	plugins = global.plugins = require("gulp-load-plugins")( { scope: ['devDependencies'] } );;

gulp.task( 'jshint', function(callback) {
	return gulp.src( 'IsA.js' )
		.pipe( global.plugins.jshint() )
		.pipe( global.plugins.jshint.reporter('default' ));
} );

gulp.task( 'uglify', function(callback) {
	return gulp.src( 'IsA.js' )
		.pipe( global.plugins.rename( 'IsA.min.js') )
		.pipe( global.plugins.uglify( {outSourceMap: true} ) )
		.pipe( gulp.dest('./') );
} );

gulp.task( 'default', [ 'jshint', 'uglify' ] );
