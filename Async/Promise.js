console.log("Before promiseObject creation");
const promiseObject = new Promise(function(resolve, reject){
    setTimeout(() => {
        //console.log("Inside expensive operation");
        resolve("Expensive operation done successfully");
    }, 2000);
});

console.log("Before promiseObject then");
promiseObject.then(function(result) {
    //console.log("Then called", result);
});
console.log("After promiseObject then");

function expensiveMethod() {
    const myPromiseObject = new Promise(function(resolve, reject){
        // DB hit, api hit, any other expensive operation
        setTimeout(() => {
            resolve("expensiveMethod success!");
            //reject("Error occured");
        }, 2000);
    });

    return myPromiseObject;
}

const promiseObj = expensiveMethod();
promiseObj.then(function(result){
    console.log("Inside promiseObj then", result);
}, function(error) {
    console.log("Inside promiseObj error 1", error);
    throw new Error(error);
}).then(function() {
    console.log("Inside chain method 1");
}).then(function() {
    console.log("Inside chain method 2");
}).catch(function(error) {
    console.log("Inside promiseObj error 2", error);
}).finally(function(){
    console.log("Finally called");
})
