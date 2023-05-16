let x = 5;
let y = 5;

if (x != y) {
  console.log("Without type comparison, x is not equal to y");
} else {
  console.log("Without type comparison, x is equal to y");
}

//console.log("Comparing x and y", x != y);

if (x !== y) {
  console.log("With type comparison, x is not equal to y");
} else {
  console.log("With type comparison, x is equal to y");
}

console.log("Comparing x and y with type", x !== y);
