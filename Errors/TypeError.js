//null.functionName();

const a  = 12;

try {
    a.myFunction();
}
catch(error) {
    console.error(error.message);
}

console.log("After error");

throw new TypeError("Ashish Type error");


