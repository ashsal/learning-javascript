//import {add, subtract} from './Module1.js';
import {subtract, add, devide, myVar, multiply as myMultiply} from './Module1.js';
import {exportedFuncFromModule2} from './Module2.js';

//import {multiply as myMultiply} from './Module1.js';

import * as MyModuleFunctions from './Module1.js';

import theDefaultFunc from './Module1.js';


console.log(add(4,6));
console.log(subtract(4,6));
console.log(devide(6,4));
console.log("myVar is", myVar);

console.log("myMultiply", myMultiply(4, 6));

console.log("myMultMyModuleFunctionsiply", MyModuleFunctions.multiply(4, 5));

theDefaultFunc();

exportedFuncFromModule2();