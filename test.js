/**
 * Module dependencies.
 */

// var assert = require('assert');

var Sheba = require('./index');

console.log('+ Sheba.validate');
console.log(Sheba.isValid('6221061106498670')); // true
console.log(Sheba.isValid('636214-1075165358')); // true

console.log('----------------------');
console.log('+ Sheba.recognize');
console.log(Sheba.recognize('6221061106498670')); // true
console.log(Sheba.recognize('6362-141075165358')); // true

console.log('----------------------');
console.log('+ Sheba.banks');
// console.log(Sheba.banks);
