function Student(name) {
    this.name = name;
}

const student1 = new Student("Ram");
const student2 = new Student("Shyam");

console.log("student1 is", student1);
console.log("student2 is", student2);

console.log("student1 class is", student1.class);
console.log("student2 class is", student2.class);

Student.prototype.class = 3;
Student.prototype.printClassAndName = function() {
    console.log(`Name is ${this.name} and class this ${this.class}`);
};

console.log("student1 name and class is", student1.name, student1.class);
console.log("student2 class is", student2.class);

student1.printClassAndName();
student2.printClassAndName();

const myString = "ashish";
console.log(myString.toUpperCase());

String.prototype.returnSecondCharacter = function() {
    return this[1];
}

console.log(myString.returnSecondCharacter());