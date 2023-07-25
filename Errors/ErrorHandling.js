try
{
    const result = someFunction();
}
catch(error) {
    //console.error(error);
}

console.log("After Error");


function devide(a, b) {
    if(b === 0) 
    {
       throw new Error("B cannot be zero"); 
    }

    return a/b;
}

try {
    console.log("i am in try block");
    const divisionResult = devide(4, 0);
    console.log(divisionResult);
}
catch(error) {
    console.log("i am in catch block");
    console.log("Error has occured");
    console.log("Message is", error.message);
    console.log("Name is", error.name);
    console.log("Stack is", error.stack);
}
finally {
    console.log("i am in finally block");
}

console.log("After division");
