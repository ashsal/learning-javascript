let a;
console.log('a is', a);

function sum(x, y){
    const result = x + y;
    return result;
}

const resultOfSum = sum(2, 3);
console.log('resultOfSum', resultOfSum);

function sumWithoutReturn(x, y){
    const result = x + y;
}

const resultOfSumWithoutReturn = sumWithoutReturn(2, 3);
console.log('resultOfSumWithoutReturn', resultOfSumWithoutReturn);

const person = { firstName: 'Ashish', lastName: 'Saluja' };
console.log('person.firstName', person.firstName);
console.log('person.age', person.age);

const myFriends = ["Ramesh", "Suresh", "Rajesh"] ;
console.log("myFriends[0]", myFriends[0]);
console.log("myFriends[2]", myFriends[2]);
console.log("myFriends[3]", myFriends[3]);

console.log("typeof Ashish", typeof "Ashish");
console.log("typeof undefined", typeof undefined);

if(person.age === undefined)
{
    console.log('person.age does not exist', person.age);
}
else
{
    console.log('person.age exists', person.age);
}

if(person.age !== undefined)
{
    console.log('person.age exists', person.age);
}

if(person.age)
{
    console.log('person.age exists', person.age);
}