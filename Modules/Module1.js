function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function devide(a,b) {
    return a / b;
}

//export default function myDefaultFunc() {
export function myDefaultFunc() {
    console.log("Inside myDefaultFunc");
}

export function exportedFuncFromModule1() {
    console.log("Inside exportedFuncFromModule1");
}

export let myVar = 17;

export {add, subtract, myDefaultFunc as default };