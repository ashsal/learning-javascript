function sum(a, b) {
    const result = a + b;
    return result;
}

const sumResult = sum(1, 2);
sum(2, 3);

console.log(sumResult);

function printMyValue(a) {
    console.log('printMyValue', a);
}

printMyValue(8);

function printHello() {
    console.log('hello');
}

printHello();

function returnTest() {
    console.log('returnTest 1');
    return 1;
    console.log('returnTest 2');
}

returnTest();