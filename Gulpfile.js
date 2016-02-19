'use strict'

let gulp = global.gulp = require('gulp'),
	plugins = require('gulp-load-plugins')( { scope: ['devDependencies'] } )

gulp.task( 'lint', function (callback) {
	return gulp.src( '*.js' )
		.pipe( plugins.eslint() )
        .pipe( plugins.eslint.format() )
        .pipe( plugins.eslint.failAfterError() )
} )

gulp.task( 'mocha', function (callback) {
	return gulp.src( './test/*.mocha.js' ).pipe( plugins.mocha({reporter: 'nyan'}) )
} )

gulp.task( 'default', [ 'lint', 'mocha' ] )
