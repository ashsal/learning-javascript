const originalArray = [2, 4, 6, 7, 9];
const arrayCopyUsingSpread = [...originalArray];
console.log("arrayCopyUsingSpread", arrayCopyUsingSpread);
arrayCopyUsingSpread.pop();
console.log("arrayCopyUsingSpread after pop", arrayCopyUsingSpread);
console.log("originalArray after pop", originalArray);

const copyUsingSlice = originalArray.slice();
console.log("copyUsingSlice", copyUsingSlice);

const copyUsingArrayFrom = Array.from(originalArray);
console.log("copyUsingArrayFrom", copyUsingArrayFrom);

const copyUsingArrayConcat = originalArray.concat();
console.log("copyUsingArrayConcat", copyUsingArrayConcat);
