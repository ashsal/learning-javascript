const person = { name:"Akshay Kumar", age: 50, country:"India" };
const personCopy = person;
console.log(person, personCopy);

personCopy.name = "Salman";
console.log('After changing copy name', person, personCopy);

const personDeepCopy = {...person};

console.log("person & personDeepCopy", person, personDeepCopy);

personDeepCopy.name = "Shahrukh";


console.log("person & personDeepCopy after change", person, personDeepCopy);

const x = 5;
let y = x;
console.log(x, y);
y = 6;
console.log(x, y);