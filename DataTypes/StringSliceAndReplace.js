const myText = "It is a very beautiful day today. It is monday.";
const myTextSliced = myText.slice(4);
console.log('Sliced at 3rd index', myTextSliced);
console.log('Sliced at -7 index', myTextSliced.slice(-7));
console.log('Sliced between 4 and 12 index', myText.slice(4, 14));


const myReplacedString = myText.replace("is", "was");
console.log('myReplacedString', myReplacedString);

const re = new RegExp('is', 'g');
console.log(myText.replace(re, 'was'));

