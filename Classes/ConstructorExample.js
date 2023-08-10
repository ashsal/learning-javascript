class Car {
    constructor() {
        console.log("Constructor called");
        this.model = "Wagon R Sports";
        this.year = 2023;
    }

    printModelAndYear() {
        console.log("Model is", this.model, "year is:", this.year);
    }
}

const myCarObject = new Car();
myCarObject.printModelAndYear();

class CarFlexible {
    constructor(modelName, year) {
        this.modelName = modelName;
        this.year = year;
    }

    printModelAndYear() {
        console.log("Model is", this.modelName, "year is:", this.year);
    }
}

const myCarFlexibleObject1 = new CarFlexible("Mercedes S class", 2023);
myCarFlexibleObject1.printModelAndYear();

const myCarFlexibleObject2 = new CarFlexible("Wagon R", 2021);
myCarFlexibleObject2.printModelAndYear();


