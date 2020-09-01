/**
 * 判断类型
 * @param {any} val - 待判断类型的参数
 * @param {Boolean} capitalise - 类型的首字母是否大写
 * @returns {String}
 */
function typeOf(val: any, capitalise?: boolean): string {
  const type = Object.prototype.toString.call(val);
  return type.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2");
}
/**
 * 是否是Array类型
 * @param {any} val
 * @returns {Boolean}
 */
function isArray(val: any): boolean {
  return typeOf(val) === "array";
}
/**
 * 是否是Object类型
 * @param {any} val
 * @returns {Boolean}
 */
function isObject(val: any): boolean {
  return typeOf(val) === "object";
}
/**
 * 是否是Number类型
 * @param {any} val
 * @returns {Boolean}
 */
function isNumber(val: any): boolean {
  return typeOf(val) === "number";
}

/**
 * 是否是Function类型
 * @param {any} val
 * @returns {Boolean}
 */
function isFunction(val: any): boolean {
  return typeOf(val) === "function";
}

/**
 * 是否是Symbol类型
 * @param {any} val
 * @returns {Boolean}
 */
function isSymbol(val: any): boolean {
  return typeOf(val) === "symbol";
}

/**
 * 是否是Boolean类型
 * @param {any} val
 * @returns {Boolean}
 */
function isBoolean(val: any): boolean {
  return typeOf(val) === "boolean";
}
/**
 * 是否是Undefined类型
 * @param {any} val
 * @returns {Boolean}
 */
function isUndefined(val: any): boolean {
  return typeOf(val) === "undefined";
}
/**
 * 是否是Null类型
 * @param {any} val
 * @returns {Boolean}
 */
function isNull(val: any): boolean {
  return typeOf(val) === "null";
}
/**
 * 是否是String类型
 * @param {any} val
 * @returns {Boolean}
 */
function isString(val: any): boolean {
  return typeOf(val) === "string";
}

/**
 * 是否是Set类型
 * @param {any} val
 * @returns {Boolean}
 */
function isSet(val: any): boolean {
  return typeOf(val) === "set";
}

/**
 * 是否是WeakSet类型
 * @param {any} val
 * @returns {Boolean}
 */
function isWeakSet(val: any): boolean {
  return typeOf(val) === "weakset";
}

/**
 * 是否是Map类型
 * @param {any} val
 * @returns {Boolean}
 */
function isMap(val: any): boolean {
  return typeOf(val) === "map";
}

/**
 * 是否是WeakMap类型
 * @param {any} val
 * @returns {Boolean}
 */
function isWeakMap(val: any): boolean {
  return typeOf(val) === "weakmap";
}

/**
 * 是否是Bigint类型
 * @param {any} val
 * @returns {Boolean}
 */
function isBigint(val: any): boolean {
  return typeOf(val) === "bigint";
}

/**
 * 是否是Date类型
 * @param {any} val
 * @returns {Boolean}
 */
function isDate(val: any): boolean {
  return typeOf(val) === "Date";
}

export const types: object = {
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

export default types;
