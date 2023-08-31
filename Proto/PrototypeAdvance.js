const myArray = [4,5,6,7];

Array.prototype.average = function() {
    const sumOfArrayNumbers = this.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return sumOfArrayNumbers / this.length;
}

console.log(myArray.average());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.country = "Denmark";

const person1 = new Person("Shahrukh", 55);

console.log(person1);

console.log(person1.country);

// Parent constructor function
function Vehicle(numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
}

Vehicle.prototype.getWheelInfo = function() {
    return `${this.numberOfWheels}`;
}

// Child constructor function
function Car(numberOfWheels, companyName, model) {
    Vehicle.call(this, numberOfWheels);
    this.companyName = companyName;
    this.model = model;
    this.getInfo = function() {
        return `Car info is, number of wheels ${this.numberOfWheels} company name is ${this.companyName} and model is ${this.model}`;
    }
}

Car.prototype = Object.create(Vehicle.prototype);

const myCar = new Car(4, "Maruti", "Swift");
console.log(myCar.getInfo());

console.log(myCar.getWheelInfo());