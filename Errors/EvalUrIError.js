const myUri = "https://wwww.google.com";
const encodedMyUri = encodeURIComponent(myUri);
console.log("encodedMyUri", encodedMyUri);

const decodedMyUri = decodeURIComponent(encodedMyUri);
console.log("decodedMyUri", decodedMyUri);

console.log(decodeURIComponent("%3A"));

try{
    console.log(decodeURIComponent("%"));
} catch(error) {
    console.log(error.message);
}

//throw new URIError("URI error from Ashish");

eval('console.log("Hello from Eval")');

throw new EvalError("Eval error from Ashish");
