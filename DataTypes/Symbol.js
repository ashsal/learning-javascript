let mySymbol = Symbol("ashish");
console.log(mySymbol);

mySymbol = Symbol("saluja");
console.log(mySymbol);
console.log("Description is", mySymbol.description);

const myString1 = "ashish";
const myString2 = "ashish";
console.log('String Comparison', myString1 === myString2);

const mySymbol1 = Symbol("ashish");
const mySymbol2 = Symbol("ashish");
console.log('Symbold comparison', mySymbol1 === mySymbol2);

const myObj = {};
myObj["name"] = "ashish";
myObj["name"] = "akshay";
myObj["country"] = "India";

const mySymbol3 = Symbol("name");
const mySymbol4 = Symbol("name");
myObj[mySymbol3] = "ashish";
myObj[mySymbol4] = "akshay";

console.log(myObj);

for(let key in myObj) {
    console.log(key);
}

const mySymbol5 = Symbol.for("city");
console.log("mySymbol5", mySymbol5);
console.log("mySymbol5 from global registry", Symbol.for("city"));
console.log("mySymbol5 comparison", mySymbol5 === Symbol.for("city"));

console.log(Symbol.keyFor(mySymbol5));