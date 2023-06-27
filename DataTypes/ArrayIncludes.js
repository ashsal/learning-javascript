const myFruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Pineapple", "Apple"];
console.log("myFruits", myFruits);
const appleExists = myFruits.includes("Apple"); 
console.log("appleExists", appleExists);
console.log("appleExists", myFruits.includes("Apple"));
console.log("pearExists", myFruits.includes("Pear"));
console.log("appleExists with small a", myFruits.includes("apple"));
console.log("appleExists after index 2", myFruits.includes("Apple", 2));
console.log("appleExists after index 4", myFruits.includes("Apple", 4));