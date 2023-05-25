console.log("Parse int starts here");
const x = " asdasd ";
const y = parseInt(x);
console.log(y);

console.log(parseInt("234"));
console.log(parseInt(" 234 "));
console.log(parseInt(" 2 3 4 "));
console.log(parseInt("2a3b4"));
console.log(parseInt("2.5"));
console.log(parseInt("ads"));

console.log("Parse float starts here");

const z = "2.34";
console.log(parseFloat(z));
console.log(parseFloat(" 2.34 "));
console.log(parseFloat("2.3 4"));
console.log(parseFloat(" 2a23.34 "));
console.log(parseFloat(" 2.34a12 "));
console.log(parseFloat("asdasd.asdasd"));
