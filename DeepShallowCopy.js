let myObject1  = { name:"Ashish", address : { addressLine1:"123 sector 67", city:"Delhi", state:"Delhi" }};
let myObject2 = myObject1;

console.log("myObject1 is", myObject1);
console.log("myObject2 is", myObject2);

myObject1.name = "Salman";

console.log("Changing name");
console.log("myObject1 is", myObject1);
console.log("myObject2 is", myObject2);

console.log("-----Shallow copy-------");

let myObject3  = { name:"Ashish", address : { addressLine1:"123 sector 67", city:"Delhi", state:"Delhi" }};
//let myObject4 = Object.assign({}, myObject3);
let myObject4 = {...myObject3};

console.log("myObject3 is", myObject3);
console.log("myObject4 is", myObject4);
myObject3.name = "Kareena";
myObject3.address.city = "Ambala";
myObject3.address.state = "Haryana"
console.log("After Changing name");
console.log("myObject3 is", myObject3);
console.log("myObject4 is", myObject4);

console.log("-----Deep copy-------");

let myObject5  = { name:"Ashish", address : { addressLine1:"123 sector 67", city:"Delhi", state:"Delhi" }};
console.log(JSON.stringify(myObject5));
let myObject6 = JSON.parse(JSON.stringify(myObject5));

console.log("myObject5 is", myObject5);
console.log("myObject6 is", myObject6);
myObject5.name = "Aishwarya";
myObject5.address.city = "Ambala";
myObject5.address.state = "Haryana"
console.log("After Changing name");
console.log("myObject5 is", myObject5);
console.log("myObject6 is", myObject6);

