"use strict";function t(t){if(null==t||"object"!=typeof t&&"function"!=typeof t)throw TypeError(null===t?"value is an unboxed primitive":"value is a non-boxed-primitive object");if("string"==typeof t||"[object String]"===Object.prototype.toString.call(t))return String.prototype.toString.call(t);if("number"==typeof t||"[object Number]"===Object.prototype.toString.call(t))return Number.prototype.valueOf.call(t);if("boolean"==typeof t||"[object Boolean]"===Object.prototype.toString.call(t))return Boolean.prototype.valueOf.call(t);if("symbol"==typeof t||"[object Symbol]"===Object.prototype.toString.call(t)&&"symbol"==typeof t.valueOf()&&Symbol.prototype.toString.call(t).startsWith("Symbol("))return Symbol.prototype.valueOf.call(t);try{return BigInt.prototype.valueOf.call(t)}catch(t){}throw RangeError("unknown boxed primitive")}Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return t}});
((typeof exports.default === 'object' && exports.default !== null) || typeof exports.default === 'function') && (Object.assign(exports.default,exports), module.exports = exports.default);
