const myObject1 = Object.create({});
console.log(myObject1);
console.log(typeof myObject1);

const child = { 
    name: "Sunny",
    age: 6,
    printMyInfo: function() {
        console.log(`My name is ${this.name} and age is ${this.age} `);
    }
}

const student = Object.create(child);
student.classNumber = 1;
console.log("student is", student);
console.log("student prototype is", Object.getPrototypeOf(student));
student.printMyInfo();

// Parent object
const shape = {
    type: 'Shape',
    printMyDetails: function() {
        console.log(`My type is ${this.type}` );
    }
}


const circle = Object.create(shape);
circle.type = 'Circle';

const rectangle = Object.create(shape);
rectangle.type = 'Rectangle';

const triangle = Object.create(shape);
triangle.type = 'Triangle';

shape.printMyDetails();
circle.printMyDetails();
rectangle.printMyDetails();
triangle.printMyDetails();

const square = Object.create(shape, { numberOfSides : {
    value: 4,
    writable: true,
    configurable: true,
    enumerable: true
} });
console.log(square);