async function expensiveMethod() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            //resolve("expensiveMethod is done");
            reject("Error occured")
        }, 2000);
    });

    return myPromise;
}

function callerMethod1() {
    const promiseObj = expensiveMethod();
    promiseObj.then(function(result) {
        console.log("callerMethod1 then called", result);
    }).catch(function(error) {
        console.log("Error in callerMethod1", error);
    })
    console.log("After promiseObj.then");
}

async function callerMethod2() {
    try {
        const result = await expensiveMethod();
        console.log("callerMethod2 async await called", result);
    }
    catch(error) {
        console.log("Error in callerMethod2", error);
    }
    
}

callerMethod1();
callerMethod2()