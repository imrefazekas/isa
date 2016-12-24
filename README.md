ISA - dependency-free very minimal collection of IsA.. functions

[![NPM](https://nodei.co/npm/isa.png)](https://nodei.co/npm/isa/)
========

[isa](https://github.com/imrefazekas/isa) is an extremely small library providing helper functions for type checking.
Underscore and lodash can be proven too huge and bloated if you only need service like this.
The size of this package is: __1700 bytes__.

[Usage](#usage)
[Rules](#rules)


## Usage

Command line:

	npm install isa --save

In JS code:

	var _ = require('isa.js');
	...
	_.isFunction( function(){} );

Services:

	isArray, isObject, isError, isNumber, isDate, isFunction, isAsyncFunction, isBoolean, isString, isRegExp
