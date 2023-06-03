const myText = "    Some random text here.      ";
const myTextAfterTrim = myText.trim();
console.log('myTextAfterTrim', myTextAfterTrim, '-------');
console.log('myTextAfterTrim', myText.trim(), '-------');
console.log('trim start example', myText.trimStart(), '-------');
console.log('trim end example', myText.trimEnd(), '-------');

console.log('Index of example 1', myText.indexOf('S'));
console.log('Index of example 2', myText.indexOf('s'));
console.log('Index of example 3', myText.indexOf('random'));

console.log('Index of example 4', myText.indexOf('e'));
console.log('Index of example 4', myText.lastIndexOf('e'));