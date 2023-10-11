"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shared = require("@nolyfill/shared");
var typedArrayLength = (0, _shared.uncurryThis)(Object.getOwnPropertyDescriptor(_shared.TypedArrayPrototype, "length").get);
var g = function(value) {
    try {
        return typedArrayLength(value);
    } catch (e) {
        return false;
    }
};
var _default = g;

if ((typeof exports.default === 'object' && exports.default !== null) || typeof exports.default === 'function') {
  Object.assign(exports.default, exports);
}
module.exports = exports.default;
