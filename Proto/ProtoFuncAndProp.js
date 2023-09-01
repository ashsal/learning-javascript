function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello! My name is ${this.name}`);
}

Person.prototype.age = 22;

const myPerson = new Person("Ram");
const myPerson1 = new Person("Ram");
console.log(myPerson);
myPerson.sayHello();
console.log(myPerson.age);
console.log(myPerson.__proto__);

console.log('Object.getPrototypeOf(myPerson)', Object.getPrototypeOf(myPerson));

const parentObj = {name: "Sunny"};
const childObj = {age: 65};

Object.setPrototypeOf(childObj, parentObj);
console.log(childObj.name);
console.log("Object.getPrototypeOf(childObj)", Object.getPrototypeOf(childObj))

console.log(myPerson1.age);
console.log('myPerson1.hasOwnProperty("age")', myPerson1.hasOwnProperty("age"));
console.log('myPerson1.hasOwnProperty("name")', myPerson1.hasOwnProperty("name"));
console.log('Object.hasOwn(myPerson1, "age")', Object.hasOwn(myPerson1, "age"));
console.log('Object.hasOwn(myPerson1, "name")', Object.hasOwn(myPerson1, "name"));