const x = true;
console.log('x is', x);

const y = new Boolean(true);
console.log('y is', y);

console.log('x == y', x == y);

console.log('x === y', x === y);

if(x == y)
{
    console.log('x and y are equal');
}
else
{
    console.log('x and y are not equal');
}

const a = 5;
const b = 5;

if(x == y && a == b)
{
    console.log('x is equal to y and a is equal to b');
}
else
{
    console.log('x is not equal to y or a is not equal to b');
}


console.log('new Boolean(0)', new Boolean(0));
console.log('new Boolean(1)', new Boolean(1));

console.log('new Boolean("ashish")', new Boolean("ashish"));
console.log('new Boolean("")', new Boolean(""));