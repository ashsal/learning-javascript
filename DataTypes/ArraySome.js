const ages = [12, 13, 7, 7, 18];
console.log("ages", ages);
let result = false;

for(let i = 0; i < ages.length; i++)
{
    if(ages[i] >= 18)
    {
        result = true;
        break;
    }
}
console.log("result", result);

function checkAdult(age) {
    //console.log(age, age >= 18);
    if(age >= 18)
    {
        return true;
    }

    return false;
}

function checkAdultMinified(age) {
    return age >= 18;
}

const someResult = ages.some(checkAdult);
console.log("someResult", someResult);
console.log("ages.some(checkAdultMinified)", ages.some(checkAdultMinified));
console.log("ages.some((age) => { return age >= 18; })", ages.some((age) => { return age >= 18; }));
const myFruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
console.log("myFruits.some((fruit) => { return fruit.length > 6 } )", myFruits.some((fruit) => { return fruit.length > 6 } ));