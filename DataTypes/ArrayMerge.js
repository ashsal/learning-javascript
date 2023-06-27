const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const combinedArray = array1.concat(array2);
console.log("combinedArray", combinedArray);

array2.push(...array1);
console.log("array2", array2);

const combinedArray1 = [...array2, ...array1];
console.log("combinedArray1", combinedArray1)