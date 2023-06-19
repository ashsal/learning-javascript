const myClassMates = ["ashish", "rajesh", "amit"];
console.log("myClassMates", myClassMates);
console.log("myClassMates.length", myClassMates.length);
const newLengthAfterPush = myClassMates.push("suresh");
console.log("myClassMates after push", myClassMates);
console.log("myClassMates after push length is", newLengthAfterPush);

const newLengthAfterDoublePush = myClassMates.push("rakesh", "amitabh");
console.log("myClassMates after double push", myClassMates);

const removedItem = myClassMates.pop();
console.log("myClassMates after pop", myClassMates);
console.log("removedItem", removedItem);