const age = 17;
if(age < 18)
{
    console.log("You are a minor");
}
else {
    console.log("You are an adult");
}

const trafficLight = "purple";

if(trafficLight === "green")
{
    console.log("Drive ahead, light is green");
}
else if(trafficLight === "red") {
    console.log("Stop the car");
}
else if(trafficLight === "yellow") {
    console.log("Bare carefull, light is changing");
}
else {
    console.log("Invalid light");
}

console.log("Program ends");

age < 18 ? console.log("You are a minor") : console.log("You are an adult");