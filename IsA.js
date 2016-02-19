'use strict'

let boolTag = '[object Boolean]',
	dateTag = '[object Date]',
	errorTag = '[object Error]',
	funcTag = '[object Function]',
	numberTag = '[object Number]',
	objectTag = '[object Object]',
	regexpTag = '[object RegExp]',
	stringTag = '[object String]'

let objectProto = Object.prototype

let objToString = objectProto.toString
let fnToString = Function.prototype.toString
let objCtorString = fnToString.call(Object)

module.exports = {
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
		return this.isObject(value) && objToString.call(value) === funcTag
	},
	isBoolean: function (value) {
		return value === true || value === false || (this.isObjectLike(value) && objToString.call(value) === boolTag)
	},
	isString: function (value) {
		return typeof value === 'string' || ( this.isObjectLike(value) && objToString.call(value) === stringTag)
	},
	isRegExp: function (value) {
		return this.isObject(value) && objToString.call(value) === regexpTag
	}
}
