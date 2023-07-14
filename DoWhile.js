let i = 1;
do {
    //console.log(i);
    i++;
} while(i <= 10)

let a = 10;
do {
    //console.log(a);
    a--;
} while(a >= 1)

do {
    //console.log('Code is running');
} while(false)

let b = 1;
do {
    //console.log(b);
    b = b + 2;
} while(b <= 10)

const numbers = [123, 345, 156, 163, 754];
let c = 0;
do {
    //console.log(numbers[c]);
    c++;
} while(c < numbers.length)

const myName = "Ashish Saluja";
let d = 0;
do {
    //console.log(myName[d]);
    d++;
} while(d < myName.length)

let e = myName.length - 1;
do {
    //console.log(myName[e]);
    e--;
} while(e >= 0)

let f = 1;
do {
    let g = 1;
    do {
        const result = f * g;
        console.log(`${f} * ${g} = ${result}`);
        g++;
    } while(g <= 10)
    console.log("------");
    f++;
} while(f <= 10)
