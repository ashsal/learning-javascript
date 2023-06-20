const myClassMates = ["ashish", "rajesh", "amit"];
console.log("myClassMates", myClassMates);
const removedElement = myClassMates.shift();

console.log("myClassMates after shift", myClassMates);
console.log("removed element is", removedElement);

const emptyArray = ["test"];
if(emptyArray.length > 0)
{
    console.log(emptyArray.shift());
}

const newLength = myClassMates.unshift("sam");
console.log("myClassMates after unshift('sam')", myClassMates);
console.log("myClassMates length after unshift('sam')", newLength);

const newLength2 = myClassMates.unshift("Salman", "Akshah");

console.log("myClassMates after unshift('salman', 'akshah')", myClassMates);
console.log("myClassMates length after unshift('salman', 'akshah')", newLength2);
