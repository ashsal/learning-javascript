//console.log(x);

try {
    const message = "This is my message";
    console.log(messege);
}
catch(error) {
    console.log(error.name, error.message);
}

console.log("After try catch");

function myFunc() {
    const myFunVar = 12;
    console.log(myFunVar);
}
myFunc();

//console.log(myFunVar);

//nonExistingFunc();

throw new ReferenceError("Reference Error from Ashish");




