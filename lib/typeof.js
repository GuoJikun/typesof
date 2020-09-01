/**
 * 判断类型
 * @param {any} val - 待判断类型的参数
 * @param {Boolean} capitalise - 类型的首字母是否大写
 * @returns {String}
 */
export function typeOf(val, capitalise) {
    var type = Object.prototype.toString.call(val);
    var target = type.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2");
    return capitalise ? target : target.toLowerCase();
}
/**
 * 是否是Array类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isArray(val) {
    return typeOf(val) === "array";
}
/**
 * 是否是Object类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isObject(val) {
    return typeOf(val) === "object";
}
/**
 * 是否是Number类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isNumber(val) {
    return typeOf(val) === "number";
}
/**
 * 是否是Function类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isFunction(val) {
    return typeOf(val) === "function";
}
/**
 * 是否是Symbol类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isSymbol(val) {
    return typeOf(val) === "symbol";
}
/**
 * 是否是Boolean类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isBoolean(val) {
    return typeOf(val) === "boolean";
}
/**
 * 是否是Undefined类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isUndefined(val) {
    return typeOf(val) === "undefined";
}
/**
 * 是否是Null类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isNull(val) {
    return typeOf(val) === "null";
}
/**
 * 是否是String类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isString(val) {
    return typeOf(val) === "string";
}
/**
 * 是否是Set类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isSet(val) {
    return typeOf(val) === "set";
}
/**
 * 是否是WeakSet类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isWeakSet(val) {
    return typeOf(val) === "weakset";
}
/**
 * 是否是Map类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isMap(val) {
    return typeOf(val) === "map";
}
/**
 * 是否是WeakMap类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isWeakMap(val) {
    return typeOf(val) === "weakmap";
}
/**
 * 是否是Bigint类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isBigint(val) {
    return typeOf(val) === "bigint";
}
/**
 * 是否是Date类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isDate(val) {
    return typeOf(val) === "Date";
}
export default {
    typeOf: typeOf,
    isUndefined: isUndefined,
    isNull: isNull,
    isNumber: isNumber,
    isString: isString,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isArray: isArray,
    isObject: isObject,
    isSymbol: isSymbol,
    isSet: isSet,
    isMap: isMap,
    isWeakSet: isWeakSet,
    isWeakMap: isWeakMap,
    isBigint: isBigint,
    isDate: isDate,
};
