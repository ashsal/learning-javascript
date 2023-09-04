const myObject = { age: 22 };
console.log(myObject);

Object.defineProperty(myObject, "name", {
    value: "Ashish",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(myObject);
console.log("myObject.name", myObject.name);

Object.defineProperty(myObject, "name", {
    writable: true,
    //writable: false,
});

myObject.name = "Sunny";
console.log("myObject.name", myObject.name);

Object.defineProperty(myObject, "name", {
    //enumerable: false,
    enumerable: true,
});

for(let key in myObject) {
    console.log("Key is", key);
}

console.log(myObject);

Object.defineProperty(myObject, "name", {
    //configurable: true,
    configurable: false,
});

//delete myObject.name;

console.log("After delete", myObject);

const myObject2 = {};

Object.defineProperty(myObject2, "name", {
    value:"Akshay",
    configurable: true,
    enumerable: true
})

console.log(myObject2);

Object.defineProperty(myObject2, "name", {
    writable: true
})