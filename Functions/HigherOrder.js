function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doOperation(x, y, operation) {
    try {
        return operation(x, y);
    }
    catch(error) {
        console.error(error.name)
    }
    
}

const addResult = doOperation(2, 3, add);
console.log("addResult", addResult);


const multiplyResult = doOperation(2, 3, multiply);
console.log("multiplyResult", multiplyResult);

function multiplyBy(factor) {
    function multiply(number) {
        return number * factor;
    }

    return multiply;
}

const double = multiplyBy(2);

console.log('double', double(5));
console.log('double', double(6));

const triple = multiplyBy(3);
console.log('triple', triple(6));