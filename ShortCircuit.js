//console.log(false && true && true);

const firstName = null;
const middleName = "kumar";
const lastName = "saluja";
if (firstName == null || middleName == null || lastName == null) {
  console.log("There is a null value");
}

const result = firstName && middleName && lastName; // true && false && true
console.log(result);
if (result == null) {
  console.log("There is a null value");
}

if (!(firstName && middleName && lastName)) {
  console.log("There is a null value");
}

const age = 17;
console.log(age > 18 && "Driving is allowed");
if (age > 18) {
  //console.log("Driving is allowed");
}

const nameResult = firstName || middleName || lastName;
console.log(nameResult);

let nameResult1 = null;
if (firstName != null) {
  nameResult1 = firstName;
} else if (middleName != null) {
  nameResult1 = middleName;
} else if (lastName != null) {
  nameResult1 = lastName;
}

console.log(nameResult1);
