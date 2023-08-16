const myName = "Ashish Saluja";
for(let char of myName) {
    //console.log(char);
}

const myArray = [3,4,6,8];
for(let num of myArray) {
    //console.log(num);
}

const myObj = {};
myObj[Symbol.iterator] = function() {
    let n = 1;
    const returnObject = {
        next: function() {
            console.log("Inside next function");
            let done = false;
            if(n > 10) {
                done = true;
            }
            const result = {value: n, done: done};
            n++;
            return result;
        }
    };

    return returnObject;
};


for(let myNum of myObj) {
    //console.log(myNum);
}

const myStringObj = {
    value: "Ashish Saluja",
    [Symbol.iterator]: function() {
        let stringValue = this.value;
        let stringLength = this.value.length;
        let counter = 0;
        const returnObject = {
            next: function() {
                let done = false;
                if(counter === stringLength) { done = true; }
                const returnNextObject = {value: stringValue[counter], done: done};
                counter++;
                return returnNextObject;
            }
        };
        return returnObject;
    }
};
for(let myChar of myStringObj) {
    console.log(myChar);
}