console.log("In syntax error");
//console.log("My message"
//const myVar = "Ashish;

//function my Function() {
//}

try {
    eval("console.log('Hello from eval'");
}
catch(error) {
    console.log("Found error in eval");
}

throw new SyntaxError("Syntax error from Ashish");
