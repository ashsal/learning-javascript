function myFunc1() {
    return 1;
}

const myFunc1Result = myFunc1();
console.log("myFunc1Result", myFunc1Result);

function myFunc2() {
    function innerFunction() {
        return 1;
    }

    return innerFunction;
}

const myFunc2Result = myFunc2();
console.log("myFunc2Result", myFunc2Result);

const innerFunctionResult = myFunc2Result();
console.log("innerFunctionResult", innerFunctionResult);

function printHello(name) {
    console.log("Hello", name);
}

printHello("Ashish");


function printHelloWithFunction(name) {
    function innerPrintHello() {
        console.log("Hello inner", name);
    }

    return innerPrintHello;
}

const printHelloWithFunction1 = printHelloWithFunction("Ashish");
const printHelloWithFunction2 = printHelloWithFunction("Akshay");
const printHelloWithFunction3 = printHelloWithFunction("Salman");

printHelloWithFunction1();
printHelloWithFunction2();
printHelloWithFunction3();

function counter() {
    let count = 0;
    function doCount() {
        count++;
        console.log("Count is", count);
    }

    return doCount;
}

const increment = counter();
increment();
increment();
