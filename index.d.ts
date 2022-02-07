declare namespace isA {
	export function getPrototypeOf(o: any): any
	export function isHostObject(value: any): boolean
	export function isDefined(value: any): boolean
	export function isIterable(obj: any): boolean
	export function isPromise(p: any): boolean
	export function isPlainObject(value: any): boolean
	export function isObjectLike(value: any): boolean
	export function isArray(value: any): boolean
	export function isObject (value: any): boolean
	export function isError (value: any): boolean
	export function isNumber(value: any): boolean
	export function isDate(value: any): boolean
	export function isFunction(value: any): boolean
	export function isSyncFunction(value: any): boolean
	export function isAsyncFunction(value: any): boolean
	export function isBoolean(value: any): boolean
	export function isString(value: any): boolean
	export function isRegExp(value: any): boolean
	export function isValidPath(object: any, path: string | string[]): boolean
	export function walk(object: any, path: string | string[], defaultValue: any): any
	export function parameterNames(func: Function): string[]
	export function pick(object: any, predicate: any, ignore: any, target: any ): any
	export function functionsOf (obj: any, asyncOnly?: boolean)
	export function functionNames (obj: any, asyncOnly?: boolean)
}

declare module "isa.js" {
	export = isA
}
