const fruits = ["apple", "banana", "mango"];
function printFruit(fruit) { 
    console.log(fruit);
}
fruits.forEach(printFruit);


fruits.forEach((fruit) => { 
    console.log(fruit);
});

const myMarks = [55, 89, 23];
let sum = 0;
myMarks.forEach((mark) => {
    sum = sum + mark;
    console.log(sum);
});
console.log("sum", sum);

const numbers = [1, 2, 3];
console.log('numbers before for each', numbers);
numbers.forEach((number, index, originalArray) => {
    console.log(number, index, originalArray);
    originalArray[index] = number * 2;
})
console.log('numbers after for each',numbers);

const myClassMates = ["ashish", "salman", "shahrukh"];
const myClassMatesWithUpperCase = [];
myClassMates.forEach((myClassMate, index) => {
    console.log(myClassMate, index);
    myClassMatesWithUpperCase[index] = myClassMate.toUpperCase();
})
console.log(myClassMates, myClassMatesWithUpperCase);