const myArray = ["apple", "banana", "orange"];
console.log("myArray[1]", myArray[1]);
console.log("myArray[2]", myArray[2]);

console.log("myArray.length", myArray.length);

myArray[3] = "pineapple";
console.log("myArray.length", myArray.length);
console.log("myArray", myArray);

myArray[1] = "grapes";
console.log("myArray", myArray);

delete myArray[2];
console.log("myArray after delete", myArray);
console.log("myArray length after delete", myArray.length);

for(let i = 0; i < myArray.length; i++)
{
    console.log(i, myArray[i]);
}
myArray.forEach(function(element) { console.log(element)});

for(const fruit of myArray) {
    console.log('Ashish ate ' + fruit);
}