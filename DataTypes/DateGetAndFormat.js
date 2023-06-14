const myDate = new Date();
console.log(myDate);
console.log('myDate.getDate()', myDate.getDate());
console.log('myDate.getDay()', myDate.getDay());
console.log('myDate.getMonth()', myDate.getMonth());
console.log('myDate.getSeconds()', myDate.getSeconds());


console.log('myDate.toISOString()', myDate.toISOString());

var options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
console.log('myDate.toLocaleString("en-US")', myDate.toLocaleString("en-US"));

console.log('myDate.toLocaleString("en-US")', myDate.toLocaleString("en-US", options));
console.log('myDate.toLocaleString("hi-IN")', myDate.toLocaleString("hi-IN", options));
