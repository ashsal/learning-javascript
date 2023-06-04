const myText = "My name is Ashish";
const myTextSubstr = myText.substr(3, 4);
console.log('myTextSubstr', myTextSubstr);

console.log('substr(11, 6)', myText.substr(11, 6));
console.log('substr(-6, 6)', myText.substr(-6, 6));
console.log('substr(11)', myText.substr(8));

console.log('substr(3, 4)', myText.substr(3, 4));
console.log('substring(3, 7)', myText.substring(3, 7));

console.log('startsWith("My")', myText.startsWith("My"));
console.log('startsWith("my")', myText.startsWith("my"));

console.log('startsWith("name")', myText.startsWith("name"));
console.log('startsWith("name", 3)', myText.startsWith("name", 3));


console.log('endsWith("shish")', myText.endsWith("shish"));
console.log('endsWith("Shish")', myText.endsWith("Shish"));

console.log('endsWith("shi")', myText.endsWith("shi"));
console.log('endsWith("shi", 15)', myText.endsWith("shi", 15));
