const myFruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Pineapple", "Apple", "Grapes"];
console.log("myFruits", myFruits);
const indexOfApple = myFruits.indexOf("Apple");
console.log("indexOfApple", indexOfApple);
console.log("First index of apple", myFruits.indexOf("Apple"));
console.log("Second index of apple", myFruits.indexOf("Apple", 2));
console.log("Third index of apple", myFruits.indexOf("Apple", 4));
console.log("From last index of apple", myFruits.indexOf("Apple", -1));
console.log("From last index of apple", myFruits.indexOf("Apple", -2));

const ages = [12, 45, 67, 34];
console.log("67 in ages", ages.indexOf(67));

console.log("last index of apple", myFruits.lastIndexOf("Apple"));
console.log("last index of age 67", ages.lastIndexOf(67));

console.log("last index of apple", myFruits.lastIndexOf("Apple", 5));
