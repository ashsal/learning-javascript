const myString = "Ashish";
console.log(myString);
const myStringRepeat = myString.repeat(3);
console.log("myStringRepeat", myStringRepeat);

//myString.repeat(-2);

function checkAge(age) {
    if(age < 0 || age > 120) {
        throw new RangeError("Age should be between 0 and 120");
    }

    console.log("Perfect age");
}

try {
    checkAge(-1);
}
catch(error) {
    console.log(error.message);
}

function checkString (myInputString) {
    const acceptedValues = ["banana", "orange", "apple"];
    if(!acceptedValues.includes(myInputString)) {
        throw new RangeError("String value can only be banana orange or apple");
    }

    console.log("Correct string value");
}

checkString("grapes");


