const numbers = [10, 20, 70, 40, 50];
let result = 0;
for(let i = 0; i < numbers.length; i++)
{
    result = result + numbers[i];
}

console.log("result", result);

const sumResult = numbers.reduce(function(endResult, currentValue, currentIndex, originalArray) {
    return endResult + currentValue;
}, 0);
console.log("sumResult", sumResult);

const maxResult = numbers.reduce(function(accumulator, currentValue) {
    //console.log(accumulator, currentValue);
    if(accumulator < currentValue)
    {
        return currentValue;
    }

    return accumulator;
}, 0);

console.log("max value", maxResult);
const words = ['Ashish', ' ', 'Saluja', '!', ' ', 'hello', ' ', 'world'];
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("sentence", sentence);

const colors = ['red', 'blue', 'green', 'red', 'yellow', 'blue', 'red'];
const colorsCount = colors.reduce(function(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    if(!accumulator[currentValue])
    {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue] = accumulator[currentValue] + 1;
    return accumulator;
}, {});
console.log("colorsCount", colorsCount);