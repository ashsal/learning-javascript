for(let i = 0; i < 10; i++) {
    if(i > 5) {
        break;
    }
    //console.log(i);
}

const numbers = [78, 67, 126, 178, 189];
for(const number of numbers) {
    if(number > 125) {
        break;
    }
    //console.log(number);
}

const age = 17;
switch(true) {
    case age < 18:
        console.log("You are a minor");
        break;
    case age >= 18:
        console.log("You are an adult");
        break;
}
