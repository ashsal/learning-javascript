const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log("fruits", fruits);
const slicedFruits = fruits.slice(1, 3);
console.log("slicedFruits", slicedFruits);
console.log("slicedFruits", fruits.slice(1, 3));
console.log("fruits.slice(1)", fruits.slice(1));

console.log("fruits.slice(-3)", fruits.slice(-3));

const fruitsCopy = fruits.slice(0);
console.log("fruitsCopy", fruitsCopy);