try
{
    const myError = new Error();
    throw myError;
}
catch(err) {
    //console.log("Caught an error", err);
}

function devide(a, b) {
    if(b === 0)
    {
        const myDivisionError = new Error("B cannot be zero");
        throw myDivisionError;
    }

    return a/b;
}

try
{
    const result = devide(12, 0);
    console.log("result is", result);
}
catch(error) {
    console.log("error message is", error.message);
}

try
{
    someFunction();
}
catch(error)
{
    console.log("error message is", error.message);
    throw new Error("Error occured while calling someFunction", { cause : {error, name:"Ashish code"} });
}

