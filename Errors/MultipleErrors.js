try {
    throw new Error("Unknown error");
    function1();
    function2();
}
catch(error) {
    if(error instanceof ReferenceError) {
        console.log("Caught reference error");
    } else if(error instanceof TypeError) {
        console.log("Caught Type error");
    }
    else {
        console.log("Unknown error caught");
    }
}

try {
    //throw new Error("Unknown error");
    //function1();
    function2();
}
catch(error) {
    switch(true) {
        case (error instanceof ReferenceError) : {
            console.log("In switch case, Caught reference error");
            break;
        }

        case(error instanceof TypeError) :  {
            console.log("In switch case, Caught Type error");
            break;
        }

        default : {
            console.log("In switch case, Unknown error caught");
        }
        
    }
}

function function1() {
    throw new TypeError("Throws type error");
}

function function2() {
    throw new ReferenceError("Throws reference error");
}