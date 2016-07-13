'use strict'

let chai = require('chai')
let expect = chai.expect

let _ = require('../IsA')

describe('IsA.js', function () {
	before(function (done) {
		done()
	})

	describe('Test IsA services', function () {
		it('Function', function (done) {
			let fn = function () {}
			expect( _.isFunction( fn ) ).to.be.true
			done()
		})
		it('Boolean', function (done) {
			let b = true
			expect( _.isBoolean( b ) ).to.be.true
			done()
		})
		it('Regexp', function (done) {
			let r = /almafa/
			expect( _.isRegExp( r ) ).to.be.true
			done()
		})
		it('String', function (done) {
			let s = 'demo'
			expect( _.isString( s ) ).to.be.true
			done()
		})
		it('Plan', function (done) {
			let p = { data: 'hello' }
			expect( _.isPlainObject( p ) ).to.be.true
			done()
		})
	})

	after(function (done) {
		done()
	})
})
