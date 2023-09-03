const myObject = { name: "Shahrukh" };
console.log(myObject);

const myObjectNameDescriptors = Object.getOwnPropertyDescriptor(myObject, "name");
console.log(myObjectNameDescriptors);

const myObject2 = { name : "Akshay"};

Object.defineProperty(myObject2, "country", {
    value:"India",
    writable: true
});

console.log("myObject2", myObject2);
console.log("myObject2.country", myObject2.country);

const myObject2CountryDescriptors = Object.getOwnPropertyDescriptor(myObject2, "country");
console.log(myObject2CountryDescriptors);

console.log("Trying to write")
console.log(myObject2.name, myObject2.country);
myObject2.name = "Sunny";
myObject2.country = "Canada";

console.log(myObject2.name, myObject2.country);