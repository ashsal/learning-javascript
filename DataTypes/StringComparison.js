const x = 'a';
const y = 'b';

let result = x == y;
console.log(result);

if(x == y)
{
    console.log('x and y are equal');
}
else
{
    console.log('x and y are not equal');
}

console.log('x == y', x == y);
console.log('a == b', 'a' == 'b');

console.log('a == a', 'a' == 'a');

console.log('a == A', 'a' == 'A');
console.log('a == A with toLowerCase', 'a'.toLowerCase() == 'A'.toLowerCase());

console.log('5 == 5 string', 5 == '5');

console.log('5 === 5 string', 5 === '5');

console.log('a != b', 'a'!= 'b');
console.log('a != a', 'a'!= 'a');

console.log('a < b', 'a' < 'b');
console.log('aa < ab', 'aa' < 'ab');
console.log('ac < ab', 'ac' < 'ab');

console.log('aa < aaa', 'aa' < 'aaa');
