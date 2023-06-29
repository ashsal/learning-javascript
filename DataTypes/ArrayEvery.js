const ages = [23, 45, 8, 18, 19];
let result = true;
for(let i = 0; i < ages.length; i++)
{
    if(ages[i] < 18)
    {
        result = false;
        break;
    }
}

console.log(result);

function checkAdult(age)
{
    if(age < 18)
    {
        return false;
    }

    return true;
}

function checkAdultMinified(age)
{
    console.log(age, age >= 18);
    return age >= 18;
}

const everyResult = ages.every(checkAdult);
console.log("everyResult", everyResult);
console.log("ages.every(checkAdultMinified)", ages.every(checkAdultMinified));

console.log("ages.every((age => { return age >= 18 }))", ages.every((age => { return age >= 18 })));

const numbers = [22, 42, 8, 18, 12];
console.log("check even", numbers.every((num) => { return num % 2 === 0 }));

