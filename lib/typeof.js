(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.types = void 0;
    /**
     * 判断类型
     * @param {any} val - 待判断类型的参数
     * @param {Boolean} capitalise - 类型的首字母是否大写
     * @returns {String}
     */
    function typeOf(val, capitalise) {
        var type = Object.prototype.toString.call(val);
        return type.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2");
    }
    /**
     * 是否是Array类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isArray(val) {
        return typeOf(val) === "array";
    }
    /**
     * 是否是Object类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isObject(val) {
        return typeOf(val) === "object";
    }
    /**
     * 是否是Number类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isNumber(val) {
        return typeOf(val) === "number";
    }
    /**
     * 是否是Function类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isFunction(val) {
        return typeOf(val) === "function";
    }
    /**
     * 是否是Symbol类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isSymbol(val) {
        return typeOf(val) === "symbol";
    }
    /**
     * 是否是Boolean类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isBoolean(val) {
        return typeOf(val) === "boolean";
    }
    /**
     * 是否是Undefined类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isUndefined(val) {
        return typeOf(val) === "undefined";
    }
    /**
     * 是否是Null类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isNull(val) {
        return typeOf(val) === "null";
    }
    /**
     * 是否是String类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isString(val) {
        return typeOf(val) === "string";
    }
    /**
     * 是否是Set类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isSet(val) {
        return typeOf(val) === "set";
    }
    /**
     * 是否是WeakSet类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isWeakSet(val) {
        return typeOf(val) === "weakset";
    }
    /**
     * 是否是Map类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isMap(val) {
        return typeOf(val) === "map";
    }
    /**
     * 是否是WeakMap类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isWeakMap(val) {
        return typeOf(val) === "weakmap";
    }
    /**
     * 是否是Bigint类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isBigint(val) {
        return typeOf(val) === "bigint";
    }
    /**
     * 是否是Date类型
     * @param {any} val
     * @returns {Boolean}
     */
    function isDate(val) {
        return typeOf(val) === "Date";
    }
    exports.types = {
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
    exports.default = exports.types;
});
