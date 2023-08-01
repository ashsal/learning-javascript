{
    let a = 1;
    console.log(a);
}
//console.log(a);

if(true)
{
    const b = 2;
    console.log(b);
}
//console.log(b);

if(true) {
    var c = 3;
    console.log(c)
}

console.log(c);

function f1() {
    let d = 4;
    console.log('Inside d is', d);
}

f1();
//console.log('Outside d is', d);

const e = 5;
function f2() {
    const f = 6;
    if(true) {
        const g = 7;
        console.log('F is', f); 
        console.log('E is', e);
    }
    //console.log(g);
}




f2();

function f3() {
    h = 10;
}
f3();
console.log(h);