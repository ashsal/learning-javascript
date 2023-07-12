for(let i = 1; i <= 10; i++) {
    //console.log(i);
}

for(let i = 10; i >= 1; i--) {
    //console.log(i);
}

for(let i = 1; i <= 10; i = i + 2) {
    //console.log(i);
}

const numbers = [123, 232, 454, 676, 545];

for(let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
}

const myName = "Ashish Saluja";
for(let i = 0; i < myName.length; i++) {
    //console.log(myName[i]);
}

for(let i = myName.length - 1; i >= 0; i--) {
    //console.log(myName[i]);
}

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        const multiplicationResult = i * j;
        console.log(` ${i} * ${j} = ${multiplicationResult} `);
    }
    console.log('----------')
}

