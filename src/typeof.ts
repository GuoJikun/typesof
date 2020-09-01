/**
 * 判断类型
 * @param {any} val - 待判断类型的参数
 * @param {Boolean} capitalise - 类型的首字母是否大写
 * @returns {String}
 */
export function typeOf(val: any, capitalise?: boolean): string {
  const type = Object.prototype.toString.call(val);
  const target = type.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2");
  return capitalise ? target : target.toLowerCase();
}
/**
 * 是否是Array类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isArray(val: any): boolean {
  return typeOf(val) === "array";
}
/**
 * 是否是Object类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isObject(val: any): boolean {
  return typeOf(val) === "object";
}
/**
 * 是否是Number类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isNumber(val: any): boolean {
  return typeOf(val) === "number";
}

/**
 * 是否是Function类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isFunction(val: any): boolean {
  return typeOf(val) === "function";
}

/**
 * 是否是Symbol类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isSymbol(val: any): boolean {
  return typeOf(val) === "symbol";
}

/**
 * 是否是Boolean类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isBoolean(val: any): boolean {
  return typeOf(val) === "boolean";
}
/**
 * 是否是Undefined类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isUndefined(val: any): boolean {
  return typeOf(val) === "undefined";
}
/**
 * 是否是Null类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isNull(val: any): boolean {
  return typeOf(val) === "null";
}
/**
 * 是否是String类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isString(val: any): boolean {
  return typeOf(val) === "string";
}

/**
 * 是否是Set类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isSet(val: any): boolean {
  return typeOf(val) === "set";
}

/**
 * 是否是WeakSet类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isWeakSet(val: any): boolean {
  return typeOf(val) === "weakset";
}

/**
 * 是否是Map类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isMap(val: any): boolean {
  return typeOf(val) === "map";
}

/**
 * 是否是WeakMap类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isWeakMap(val: any): boolean {
  return typeOf(val) === "weakmap";
}

/**
 * 是否是Bigint类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isBigint(val: any): boolean {
  return typeOf(val) === "bigint";
}

/**
 * 是否是Date类型
 * @param {any} val
 * @returns {Boolean}
 */
export function isDate(val: any): boolean {
  return typeOf(val) === "Date";
}

export default {
  typeOf,
  isUndefined,
  isNull,
  isNumber,
  isString,
  isBoolean,
  isFunction,
  isArray,
  isObject,
  isSymbol,
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isBigint,
  isDate,
};
