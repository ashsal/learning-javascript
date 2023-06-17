const firstName = "ashish"; 
const secondName = "seema"; 

const myArray = ["ashish", "seema", "rita", "sam"];
console.log("myArray", myArray);
console.log("myArray[0]", myArray[0]);
console.log("myArray[2]", myArray[2]);

console.log("myArray.length", myArray.length);

const myEmptyArray = [];
myEmptyArray[0] = "ashish";
myEmptyArray[1] = "seema";
console.log("myEmptyArray", myEmptyArray);

const myMixedArray = ["ashish", 123, true, 123.12];
console.log("myMixedArray", myMixedArray);

const myArrayWithConstructor = new Array(1,3,4,5);
console.log("myArrayWithConstructor", myArrayWithConstructor);

const myArrayWithConstructorAndSpecifiedLength = new Array(5);
myArrayWithConstructorAndSpecifiedLength[0] = "ashish";
myArrayWithConstructorAndSpecifiedLength[5] = "fifth value";
console.log("myArrayWithConstructorAndSpecifiedLength", myArrayWithConstructorAndSpecifiedLength);
console.log("myArrayWithConstructorAndSpecifiedLength[1]", myArrayWithConstructorAndSpecifiedLength[1]);