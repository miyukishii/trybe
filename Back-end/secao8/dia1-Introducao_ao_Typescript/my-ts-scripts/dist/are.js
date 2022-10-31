"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convert(value, from, to) {
    const fromIndex = units.indexOf(from);
    const toIndex = units.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
console.log(convert(100, 'km²', 'dam'));
