const myObject = {
    name:"Sunny",
    age: 65,

    printMyInfo: function(name) {
        console.log(`My name is ${this.name} and my age is ${this.age}. Name from parameter is ${name}`)
    }
}

myObject.printMyInfo("Akshay");


const myObject2 = { name: "Salman", age: "56"};
const myObject3 = { name: "Aamir", age: "57"};

function greet() {
    console.log(`Hello! my name is ${this.name} and my age is ${this.age}`);
}

greet.call(myObject2);
greet.call(myObject3);

function greet2(cityName, stateName) {
    console.log(`Hello! my name is ${this.name} and my age is ${this.age} and my city is ${cityName} and state is ${stateName}`);
}
greet2.call(myObject2, "Mumbai", "Maharashtra");

greet2.apply(myObject3, ["Ambala", "Haryana"]);

const greet2WithMyObject2 = greet2.bind(myObject2);
greet2WithMyObject2("Lucknow", "UP");
greet2WithMyObject2("Jaipur", "Rajasthan");
