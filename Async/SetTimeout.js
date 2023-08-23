setTimeout(function() {
    console.log("Inside set time out 1");
}, 2000);

function myFunction1() {
    console.log("Inside myFunction1");
}

setTimeout(myFunction1, 3000);

function myFunction2(a, b) {
    console.log("Inside myFunction2");
    console.log("a+b", a+b);
}
setTimeout(myFunction2, 4000, 5, 6);

const timeOutId = setTimeout(function() {
    console.log("Inside set timeout 4");
}, 5000);

console.log("After set time out 4");
//console.log("timeOutId", timeOutId);
clearTimeout(timeOutId);