const mySet = new Set();

mySet.add("banana");
mySet.add("apple");
mySet.add("grapes");
console.log(mySet);
console.log("Size is", mySet.size);

mySet.add("banana");

console.log("Myset after adding banana", mySet);
console.log("Size after adding banana is", mySet.size);

console.log("mySet.has banana", mySet.has("banana"));
console.log("mySet.has orange", mySet.has("orange"));
if(!mySet.has("orange"))
{
    mySet.add("orange");
}

console.log("mySet.has orange after adding", mySet.has("orange"));

for(let fruit of mySet) {
    console.log('In for of', fruit);
}

mySet.forEach((fruit) => {
    console.log('In forEach',fruit);
});
console.log("Size before deleting banana is", mySet.size);
mySet.delete("banana");
console.log("Size after deleting banana is", mySet.size, mySet);

console.log("Size before clear", mySet.size);
mySet.clear();
console.log("Size after clear", mySet.size);
