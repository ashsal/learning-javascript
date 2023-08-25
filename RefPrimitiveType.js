let myNum = 5;
//myNum = 6;

let myNum2 = myNum;
console.log(myNum, myNum2);
myNum = 6;
console.log(myNum, myNum2);

console.log("myNum === myNum2", myNum === myNum2);

let a = 7;
function myFunc1(b) {
    b = 8;
}
console.log('a is', a);
myFunc1(a);
console.log('a is', a);


let x = 5;
let y = x;
let myObj1 = { name:"Ashish", country:"India" }
let myObj2 = myObj1;
console.log(myObj1, myObj2);
myObj1.name = "Rahul";
console.log(myObj1, myObj2);
console.log("myObj1 === myObj2", myObj1 === myObj2);

let myObj3 = { name:"Rahul", country:"India" }
console.log(myObj3, myObj2);
console.log("myObj3 === myObj2", myObj3 === myObj2);

let myObj4 = {name: "Salman", profession: "Actor"};
function myFunc3(myParam) {
    myParam.name = "Sunny";
}
console.log(myObj4);
myFunc3(myObj4);
console.log(myObj4);
