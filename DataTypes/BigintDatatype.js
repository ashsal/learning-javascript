console.log(Number.MAX_SAFE_INTEGER);

const maxPlus1 = Number.MAX_SAFE_INTEGER + 1;
const maxPlus2 = Number.MAX_SAFE_INTEGER + 2;
console.log('maxPlus1', maxPlus1);
console.log('maxPlus2', maxPlus2);

const myNumber = 5;
const myBigintNumber1 = 5n;
const myBigintNumber2 = BigInt(5);

console.log(myNumber, myBigintNumber1, myBigintNumber2);

console.log("typeof myNumber", typeof myNumber);
console.log("typeof myBigintNumber1", typeof myBigintNumber1);
console.log("typeof myBigintNumber2", typeof myBigintNumber2);

//const myBigintNumber3 = BigInt(5.5);

console.log(12n + 2n);

console.log("12/5", 12/5);
console.log("12n / 5n", 12n / 5n);

console.log("12n == 12", 12n == 12);
console.log("12n === 12", 12n === 12);