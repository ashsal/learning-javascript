const myNumbers = [12, 14, 18, 19, 2];
let result;
for(let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] > 15)
    {
        result = myNumbers[i];
        break;
    }
}

console.log("result is", result);

function checkNumber(num) {
    if(num > 15)
    {
        return true;
    }
    return false;
}

function checkNumberMinified(num) {
    return num > 15;
}

const findResult = myNumbers.find(checkNumber);
console.log("findResult", findResult);
console.log("myNumbers.find(checkNumberMinified)", myNumbers.find(checkNumberMinified));
console.log("myNumbers.find(num => num > 15)", myNumbers.find(num => num > 15));

const fruits = ['apple', 'banana', 'orange', 'bananas', 'kiwi'];
console.log(fruits.find(fruit => fruit.startsWith("ba")));