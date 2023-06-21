const myClassMates = ["ashish", "kareena", "madhuri"];

console.log("myClassMates", myClassMates);
myClassMates.splice(1, 0, "shahrukh");
console.log("myClassMates after splice(1, 0, 'shahrukh')", myClassMates);

myClassMates.splice(myClassMates.length, 0, "anil");

console.log("myClassMates after splice(myClassMates.length - 1, 0, 'anil')", myClassMates);



myClassMates.splice(2, 1);
console.log("myClassMates after splice(2, 1)", myClassMates);

myClassMates.splice(1, 1, 'salman');

console.log("myClassMates after splice(1, 1, 'salman')", myClassMates);
myClassMates.splice(2, 1, 'kareena', 'sushmita');

console.log("myClassMates after splice(2, 1, 'kareena', 'sushmita')", myClassMates);

