let x = 6;
let y = 5;

console.log(x == y); // is x equal to y?

if (x == y) {
  console.log("Yes x is equal to y");
} else {
  console.log("No x is not equal to y");
}

let z = 5;

console.log("Comparing y and z through ==", y == z);
console.log("Comparing y and z through ===", y === z);

if (y === z) {
  console.log("Yes y is equal to z");
} else {
  console.log("No y is not equal to z");
}
