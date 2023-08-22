function expensiveMethod() {
    const myPromise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            //resolve("expensiveMethod done");
            reject("Some error has occured")
        }, 2000);
    });

    return myPromise;
}

function callerMethod1() {
    const promiseObj = expensiveMethod();
    promiseObj.then(function(result) {
        console.log("callerMethod1 then", result);
    }).catch(function(error) {
        console.log("Inside callerMethod1 error", error);
    });
    console.log("After promise then");
}

async function callerMethod2() {
    try {
        const result = await expensiveMethod();
        console.log("callerMethod2 after result", result);
        console.log("After await");
    }
    catch(error) {
        console.log("Error in async await", error);
    }
    
}
callerMethod1();
callerMethod2();
console.log("After method2");
