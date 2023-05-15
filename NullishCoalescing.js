let onlineName = "Spider Name";
let realName = "Ashish";

let nameToUse = null;
/*if (onlineName != null) {
  nameToUse = onlineName;
} else {
  nameToUse = realName;
}*/

nameToUse = onlineName ?? realName;
console.log(nameToUse);

let x = null;
let y = 6;
//x = x ?? y;
x ??= y;
console.log(x);
