setInterval(function() {
    //console.log("Sending data from chandrayaan 3 to India")
}, 2000);

function myFunction1() {
    //console.log("Sending data from chandrayaan 3 to India from myFunction1")
}

setInterval(myFunction1, 3000);

function myFunction2(distance) {
    //console.log("Sending data from chandrayaan 3 to India from myFunction2, distance is", distance)
}

const intervalId = setInterval(myFunction2, 2000, 20);
console.log(intervalId);

setTimeout(function() {
    //console.log("Clearing interval");
    clearInterval(intervalId);
}, 10000)


function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`${hours}: ${minutes} : ${seconds}`);
}

setInterval(updateClock, 1000);
