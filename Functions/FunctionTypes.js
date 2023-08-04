function sayHello() {
    console.log("Hello");
}

sayHello();

const add = function(a, b) {
    return a + b;
}

const addResult = add(1, 2);
console.log("addResult", addResult);

// const multiply = (a, b) => { 
//     const result = a * b; 
//     return result; 
// };

const multiply = (a, b) => a * b;

const multiplyResult = multiply(5, 6);
console.log("multiplyResult", multiplyResult);

(function() { console.log("Hello from Immediate invoke")})();

const result = function(a) {
    return a * 5;
}(11);

console.log("Result is", result);