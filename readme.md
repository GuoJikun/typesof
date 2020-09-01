# TypeOf 类型判断

## 安装

```bash
npm i typesof
# or
yarn add typesof
```

## 使用

### 全部导入

```js
import * as types from typesof
types.typeOf(1) // number
```

### 按需导入

```js
import { typeOf } from typesof
typeOf(1) // number
```

## changeLog

### v1.0.0

feat:

    | 方法名      | 说明                  | 参数                       | 返回参数类型 |
    | ----------- | --------------------- | -------------------------- | ------------ |
    | typeOf      | 判断类型              | val:any,capitalise:boolean | String       |
    | isNull      | 是否是 null 类型      | val:any                    | Boolean      |
    | isUndefined | 是否是 undefined 类型 | val:any                    | Boolean      |
    | isNumber    | 是否是 number 类型    | val:any                    | Boolean      |
    | isString    | 是否是 string 类型    | val:any                    | Boolean      |
    | isBoolean   | 是否是 boolean 类型   | val:any                    | Boolean      |
    | isFunction  | 是否是 function 类型  | val:any                    | Boolean      |
    | isArray     | 是否是 array 类型     | val:any                    | Boolean      |
    | isObject    | 是否是 object 类型    | val:any                    | Boolean      |
    | isSymbol    | 是否是 symbol 类型    | val:any                    | Boolean      |
    | isSet       | 是否是 set 类型       | val:any                    | Boolean      |
    | isWeakSet   | 是否是 weakSet 类型   | val:any                    | Boolean      |
    | isMap       | 是否是 map 类型       | val:any                    | Boolean      |
    | isWeakMap   | 是否是 WeakMao 类型   | val:any                    | Boolean      |
    | isBigint    | 是否是 bigint 类型    | val:any                    | Boolean      |

### v1.1.0

feat:

    | 方法名      | 说明                  | 参数                       | 返回参数类型 |
    | ----------- | --------------------- | -------------------------- | ------------ |
    | isDate      | 是否是 Date 类型      | val:any                    | Boolean      |
