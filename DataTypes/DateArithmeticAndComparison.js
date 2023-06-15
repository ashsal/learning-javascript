const myDate = new Date();
console.log(myDate);

myDate.setDate(myDate.getDate() + 5);
console.log('myDate.setDate +5 days', myDate);

myDate.setDate(myDate.getDate() + 16);
console.log('myDate.setDate +16 days', myDate);

myDate.setMonth(myDate.getMonth() + 1);
console.log('myDate.getMonth +1 month', myDate);
myDate.setMonth(myDate.getMonth() + 12);
console.log('myDate.getMonth +12 month', myDate);
myDate.setMonth(myDate.getMonth() - 1);
console.log('myDate.getMonth -1 month', myDate);

const firstDate = new Date("2022-01-02");
const secondDate = new Date("2023-01-01");

console.log('Are dates equal', firstDate.getTime() == secondDate.getTime());
console.log(firstDate.getTime())
console.log(+firstDate)
console.log('Are dates equal', +firstDate == +secondDate);

if(firstDate > secondDate)
{
    console.log("first date is greater than second date");
}
else if(firstDate < secondDate)
{
    console.log("first date is less than second date");
}
else {
    console.log("first date is equal to second date");
}