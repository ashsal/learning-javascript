const a = 1;
const typeOfA = typeof a;
console.log("typeOfA", typeOfA);

console.log("typeof 3", typeof 3);

console.log("typeof string", typeof "Ashish");
console.log("typeof true", typeof true);
console.log("typeof undefined", typeof undefined);
console.log("typeof null", typeof null);

const myArray = [34, 456, 67, 34, 6];
console.log("typeof myArray", typeof myArray);
console.log("isArray myArray", Array.isArray(myArray));
console.log("isArray string", Array.isArray("Ashish"));

const myObject = { name:"Ashish", country: "India" };
console.log("typeof myObject", typeof myObject);

const myMap = new Map();
console.log("typeof Map", typeof myMap);
console.log("myMap instanceof Map", myMap instanceof Map);

const mySet = new Set();
console.log("typeof mySet", typeof mySet);
console.log("mySet instanceof Set", mySet instanceof Set);


