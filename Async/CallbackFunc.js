import fetch from 'node-fetch';
console.log("Step 1");
setTimeout(() => {
    //console.log("Step 2");
}, 1500)

console.log("Step 3");

function fakeApiRequest(callback) {
    setTimeout(() => {
        callback("I am done");
    }, 2000);
}

function myFirstCallbackMethod(outputOfFakeRequest) {
    //console.log("Got response", outputOfFakeRequest)
}

console.log("Before calling fakeApiRequest")
fakeApiRequest(myFirstCallbackMethod);
console.log("After calling fakeApiRequest")


function realApiRequest(callbackMethod) {
    const apiUrl = "https://api.chucknorris.io/jokes/random";
    fetch(apiUrl).
    then(response => { const result = response.json(); return result; }).then(data => { console.log(data); callbackMethod(data); })

}

function realApiResponse(response) {
    console.log("Joke of the day is", response.value);
}

realApiRequest(realApiResponse);