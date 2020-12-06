var boolTag = '[object Boolean]',
	dateTag = '[object Date]',
	errorTag = '[object Error]',
	funcTag = '[object Function]',
	afuncTag = '[object AsyncFunction]',
	numberTag = '[object Number]',
	objectTag = '[object Object]',
	regexpTag = '[object RegExp]',
	stringTag = '[object String]'

var objectProto = Object.prototype

var objToString = objectProto.toString
var fnToString = Function.prototype.toString
var objCtorString = fnToString.call(Object)

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
var ARGUMENT_NAMES = /([^\s,]+)/g

var NAME_PATTERN = /([\\.A-Za-z]+)/g

let Services = {
	getPrototypeOf: Object.getPrototypeOf,
	isHostObject: function (value) {
		var result = false
		if (value !== null && typeof value.toString !== 'function') {
			try {
				result = !!(value + '')
			} catch (e) {}
		}
		return result
	},
	isDefined (value) {
		return value !== undefined && value !== null
	},
	isIterable (obj) {
		if ( !Services.isDefined(obj) )
			return false

		return typeof obj[Symbol.iterator] === 'function'
	},
	isPromise (p) {
		return p && Object.prototype.toString.call(p) === '[object Promise]'
	},
	isPlainObject: function (value) {
		if (!this.isObjectLike(value) || objToString.call(value) !== objectTag || this.isHostObject(value)) {
			return false
		}
		var proto = typeof value.constructor === 'function' ? this.getPrototypeOf(value) : objectProto

		if (proto === null) {
			return true
		}
		var Ctor = proto.constructor
		return (typeof Ctor === 'function' && Ctor instanceof Ctor && fnToString.call(Ctor) === objCtorString)
	},
	isObjectLike: function (value) {
		return !!value && typeof value === 'object'
	},
	isArray: Array.isArray,
	isObject: function (value) {
		var type = typeof value
		return !!value && (type === 'object' || type === 'function')
	},
	isError: function (value) {
		return this.isObjectLike(value) && typeof value.message === 'string' && objToString.call(value) === errorTag
	},
	isNumber: function (value) {
		return typeof value === 'number' || (this.isObjectLike(value) && objToString.call(value) === numberTag)
	},
	isDate: function (value) {
		return this.isObjectLike(value) && objToString.call(value) === dateTag
	},
	isFunction: function (value) {
		return this.isObject(value) && (objToString.call(value) === funcTag || objToString.call(value) === afuncTag)
	},
	isSyncFunction: function (value) {
		return this.isObject(value) && objToString.call(value) === funcTag
	},
	isAsyncFunction: function (value) {
		return this.isObject(value) && objToString.call(value) === afuncTag
	},
	isBoolean: function (value) {
		return value === true || value === false || (this.isObjectLike(value) && objToString.call(value) === boolTag)
	},
	isString: function (value) {
		return typeof value === 'string' || ( this.isObjectLike(value) && objToString.call(value) === stringTag)
	},
	isRegExp: function (value) {
		return this.isObject(value) && objToString.call(value) === regexpTag
	},
	walk: function (object, path, defaultValue) {
		if ( !path ) return defaultValue

		let oPath = Array.isArray(path) ? path : path.split('.')

		if ( !object && oPath.length === 0 ) return true
		for ( let key of oPath ) {
			if ( !object || !object[key] ) return defaultValue
			object = object[ key ]
		}
		return object || defaultValue
	},
	isValidPath: function (object, path) {
		return !!Services.walk(object, path, null)
	},
	parameterNames: function ( func ) {
		var fnStr = func.toString().replace(STRIP_COMMENTS, '')
		var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
		if (result === null)
			result = []
		result = result.map( ( p ) => {
			var index = p.indexOf('=')
			return (index === -1) ? p : p.substring( 0, index )
		} )
		result = result.filter( ( p ) => {
			return p.length > 0 && p.match( NAME_PATTERN )
		} )
		return result
	},
	pick: function (object, predicate, ignore, target ) {
		if (!object)
			return {}

		if (!predicate)
			predicate = Object.keys( object )
		else if (!Array.isArray(predicate))
			predicate = Object.keys( predicate )

		if (!ignore)
			ignore = []
		else if (!Array.isArray(ignore))
			ignore = Object.keys( ignore )

		let res = target || {}
		for (let key of predicate)
			if (!ignore.includes(key) && object.hasOwnProperty(key) )
				res[ key ] = object[key]
		return res
	},
	functionsOf (obj, asyncOnly = false) {
		let res = []
		if (!obj) return res

		for (let m in obj)
			if ( obj[m] && ( asyncOnly ? this.isAsyncFunction( obj[m] ) : this.isFunction( obj[m] ) ) )
				res.push( obj[m] )
		return res
	},
	functionNames (obj, asyncOnly = false) {
		let res = []
		if (!obj) return res

		for (let m in obj)
			if ( obj[m] && (asyncOnly ? this.isAsyncFunction( obj[m] ) : this.isFunction( obj[m] ) ) )
				res.push( m )
		return res
	}

}

module.exports = Services
