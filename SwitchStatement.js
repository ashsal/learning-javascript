const todayWeekDay = new Date().getDay();
console.log("todayWeekDay", todayWeekDay);

switch(todayWeekDay) {
    case 0:
        console.log("Today is sunday");
        break;
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;    
    case 3:
        console.log("Today is wednesday");
        break;    
    case 4:
        console.log("Today is thursday");
        break;    
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is saturday");
        break;
}

const age = 18;
switch(true) {
    case age < 18:
        console.log("You are a minor");
        break;
    case age >= 18:
        console.log("You are an adult");
        break;
}

switch(true) {
    case age < 18:
        console.log("In break check, You are a minor");
        break;
    case age >= 18:
        console.log("In break check, You are an adult");
        break;
}


switch(true) {
    case age < 18:
        console.log("In default, You are a minor");
        break;
    default:
        console.log("In default, You are an adult");
        break;
}

switch(true) {
    default:
        console.log("In default on top, You are an adult");
        break;
    case age < 18:
        console.log("In default on top, You are a minor");
        break;
}

switch(1) {
    case "1": 
        console.log("in string 1");
        break;
    case 1:
        console.log("In number 1");
        break;
}




const month = "January";
let days;

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    days = 31;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    days = 30;
    break;
  case "February":
    days = 28;
    break;
  default:
    console.log("Invalid month. Please check your input.");
    break;
}

console.log(`The month of ${month} has ${days} days.`);