/**
 * Module dependencies.
 */

// var assert = require('assert');

var Sheba = require('./index');

console.log('+ Sheba.validate');
console.log(Sheba.isValid('6221061106498670')); // false
console.log(Sheba.isValid('6221061106498679')); // false

console.log('----------------------');
console.log('+ Sheba.recognize');
console.log(Sheba.recognize('6221061106498670')); // true

console.log('----------------------');
console.log('+ Sheba.banks');
// console.log(Sheba.banks);
