const myClassMates = ["ashish", "salman", "aamir", "aishwarya"];
console.log("myClassMates", myClassMates);

myClassMates.sort();
console.log("myClassMates after sort", myClassMates);

myClassMates.reverse();
console.log("myClassMates after reverse", myClassMates);

const ages = [9, 80, 1, 25, 6, 8, 4];
console.log("ages", ages);
ages.sort();
console.log("ages after sort", ages);

function sortNumberInAscending(a, b){
    console.log(a, b);
    if(a > b)
    {
        return 1;
    }
    else if(a < b)
    {
        return -1;
    }
    else{
        return 0;
    }
}

function sortNumberInDescending(a, b){
    console.log(a, b);
    if(a > b)
    {
        return -1;
    }
    else if(a < b)
    {
        return 1;
    }
    else{
        return 0;
    }
}
ages.sort(sortNumberInAscending);
console.log("ages after sort using custom function asc", ages);

ages.sort(sortNumberInDescending);
console.log("ages after sort using custom function desc", ages);
