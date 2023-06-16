const timeNow = new Date();
console.log("timeNow", timeNow);
console.log("timeNow in Denmark", timeNow.toLocaleString('da-DK',  { timeZone: 'Europe/Copenhagen'}));
console.log("timeNow in New York", timeNow.toLocaleString('en-US',  { timeZone: 'America/New_York'}));

console.log("timeNow in India", timeNow.toLocaleString('hi-IN',  { timeZone: 'Asia/Calcutta'}));

const myDate = new Date("2023-02-16T13:20:12.450Z");
console.log('myDate', myDate);
console.log('myDate in IST', myDate.toLocaleString('hi-IN',  { timeZone: 'Asia/Calcutta'}));
