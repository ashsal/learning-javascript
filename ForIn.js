const person = {
    name: "Ashish Saluja",
    city: "Copenhagen",
    country: "Denmark"
};

console.log('Name through dot', person.name);
console.log('Name through array key', person["name"]);

const personKeys = Object.keys(person);
console.log(personKeys);
for(let i = 0; i < personKeys.length; i++) {
    console.log(personKeys[i], person[personKeys[i]]);
}

for(let key in person) {
    console.log(key, person[key]);
}

const numbers = [89, 45, 67, 34, 45];
for(let index in numbers) {
    console.log(index, numbers[index]);
}