const firstName = 'Ashish';
const lastName = 'Saluja';
const concatUsingPlusOperator = 'My name is ' + firstName + ' ' + lastName; 
console.log('concatUsingPlusOperator', concatUsingPlusOperator);

const concatUsingBackTick = `My name is ${firstName} ${lastName}`;
console.log('concatUsingBackTick', concatUsingBackTick);

console.log("Number + Number", 5 + 4);
console.log("String + String", "Ashish" + "Saluja");
console.log("String + Number", "Ashish" + 4);
console.log("Number + String", 4 + "Ashish");
console.log("Number String + Number", "4" + 5);
console.log("Boolean + String", true + "Ashish");
console.log("String + Boolean", "Ashish" + "true");