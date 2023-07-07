const person = { firstName:"Akshay", lastName:"Kumar", age: 50, eyeColor: "brown" };
console.log("person", person);

person.firstName = "Salman"
person.lastName = "Khan";

console.log("person after change", person);
console.log("person.age", person.age);

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
}

const sumResult = calculator.add(2, 3);
console.log("sumResult", sumResult);
console.log("Subtract", calculator.subtract(10, 6));

const product = {
    name: 'Smartphone',
    brand: 'Xiaomi',
    price: 12500,
    displayInfo: function() {
        console.log(`The ${this.name} is of brand ${this.brand} and price is INR ${this.price}`);
    }
}

product.displayInfo();