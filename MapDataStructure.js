const myMap = new Map();

myMap.set("name", "Ashish");
myMap.set("age", 37);
myMap.set({id: 1}, "Some Object");

console.log(myMap);

for(let [key, value] of myMap) 
{
    console.log('For of', key, value);
}

myMap.forEach((value, key) => {
    console.log("For each", key, value)
});

console.log("myMap.has age", myMap.has("age"));
console.log("myMap.has country", myMap.has("country"));

if(!myMap.has("country"))
{
    myMap.set("country", "India");
}

console.log("myMap.has country after adding country", myMap.has("country"));

console.log("myMap.get name", myMap.get("name"));

console.log("myMap.size", myMap.size);

myMap.delete("country");

console.log("myMap.size after delete", myMap.size);

myMap.clear();

console.log("myMap.size after clear", myMap.size);
