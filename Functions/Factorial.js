const calculateFactorialFor = 5;
function factorialByLoop(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

const factorialLoopResult = factorialByLoop(calculateFactorialFor);
console.log('factorialLoopResult', factorialLoopResult);

function factorialByRecursion(n) {
    console.log(n);
    if(n == 0) {
        return 1;
    }

    return n * factorialByRecursion(n - 1);
        
}

const factorialRecursionResult = factorialByRecursion(3);
console.log('factorialByRecursion', factorialRecursionResult);