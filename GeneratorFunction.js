function* generateNumbers() {
    console.log("Before 1");
    yield 1;
    console.log("Before 2");
    yield 2;
    console.log("Before return");
    return;
}

const generatorNumberResult = generateNumbers();
console.log(generatorNumberResult);
// console.log(generatorNumberResult.next());
// console.log(generatorNumberResult.next());
// console.log(generatorNumberResult.next());

for(let num of generatorNumberResult) {
    console.log(num);
}


function* range(start, end) {
    for(let counter = start; counter <= end; counter++) {
        console.log('Inside range',counter);
        yield counter;
    }
}

const rangeResult = range(2, 6000);
for(const num of rangeResult) {
    console.log('Inside for of', num);
}

console.log("Fibonacci series");
function* generateFibonacci(maxNumber) {
    let a = 0;
    let b = 1;
    while(a < maxNumber) {
        yield a;
        const c = b;
        b = a + b;
        a = c;
    }
}

const fibonacciResult = generateFibonacci(200000);
for(const num of fibonacciResult) {
    console.log(num);
}
