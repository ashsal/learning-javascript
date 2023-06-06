const myName = "Ashish";
const myClassMates = ["Ashish", "Ramesh", "Suresh"];
console.log('myClassMates', myClassMates);

const myText = "Today is a good day";
const splittedMyText = myText.split(" ");
console.log('splittedMyText', splittedMyText);

const myCSVText = "Ashish,Ramesh,Suresh";
console.log('splittedMyCSVText', myCSVText.split(","));

console.log('splittedMyCSVText', myCSVText.split(",", 1));

const mySecondArray = ["Ashish", "Rajesh", "Rakesh"];
const mySecondArrayJoined = mySecondArray.join("");
console.log('mySecondArrayJoined', mySecondArrayJoined)