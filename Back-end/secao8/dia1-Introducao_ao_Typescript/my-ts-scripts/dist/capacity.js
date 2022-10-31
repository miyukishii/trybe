"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convert(value, from, to) {
    const fromIndex = units.indexOf(from);
    const toIndex = units.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
console.log(convert(10, 'kl', 'dal'));
