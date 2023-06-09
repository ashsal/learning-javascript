let a = null;
console.log('a is', a);

function sum(a, b) {
    if(a < 0)
    {
        return null;
    }

    return a + b;
}

console.log('sum(2, 3)', sum(2, 3));
console.log('sum(-2, 3)', sum(-2, 3));

let b = null;
let result = null;
if(b === null) {
    result = 'Value is null';
}
else
{ 
    result = b;
}
console.log('result is', result);

let result1 = b ?? 'Value is null';
console.log('result1 is', result1);

//let person = { firstName: 'Ashish', lastName: 'Saluja' };
let person = null;
console.log(person?.firstName);

let mySchoolMates = ["Ashish", "Ramesh", "Suresh"];
console.log(mySchoolMates);
mySchoolMates = null;