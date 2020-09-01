/**
 * 判断类型
 * @param {any} val - 待判断类型的参数
 * @param {Boolean} capitalise - 类型的首字母是否大写
 * @returns {String}
 */
export declare function typeOf(val: any, capitalise?: boolean): string;
/**
 * 是否是Array类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isArray(val: any): boolean;
/**
 * 是否是Object类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isObject(val: any): boolean;
/**
 * 是否是Number类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isNumber(val: any): boolean;
/**
 * 是否是Function类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isFunction(val: any): boolean;
/**
 * 是否是Symbol类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isSymbol(val: any): boolean;
/**
 * 是否是Boolean类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isBoolean(val: any): boolean;
/**
 * 是否是Undefined类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isUndefined(val: any): boolean;
/**
 * 是否是Null类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isNull(val: any): boolean;
/**
 * 是否是String类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isString(val: any): boolean;
/**
 * 是否是Set类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isSet(val: any): boolean;
/**
 * 是否是WeakSet类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isWeakSet(val: any): boolean;
/**
 * 是否是Map类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isMap(val: any): boolean;
/**
 * 是否是WeakMap类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isWeakMap(val: any): boolean;
/**
 * 是否是Bigint类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isBigint(val: any): boolean;
/**
 * 是否是Date类型
 * @param {any} val
 * @returns {Boolean}
 */
export declare function isDate(val: any): boolean;
declare const _default: {
    typeOf: typeof typeOf;
    isUndefined: typeof isUndefined;
    isNull: typeof isNull;
    isNumber: typeof isNumber;
    isString: typeof isString;
    isBoolean: typeof isBoolean;
    isFunction: typeof isFunction;
    isArray: typeof isArray;
    isObject: typeof isObject;
    isSymbol: typeof isSymbol;
    isSet: typeof isSet;
    isMap: typeof isMap;
    isWeakSet: typeof isWeakSet;
    isWeakMap: typeof isWeakMap;
    isBigint: typeof isBigint;
    isDate: typeof isDate;
};
export default _default;
