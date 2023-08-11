class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log("Starting engine of a car from company", this.company, "model is", this.model, "Year is", this.year);
    }
}

const genericCarInstance = new Car("Maruti", "Wagon R", 2023);
genericCarInstance.startEngine();
//genericCarInstance.fillUpTank();

class ElectricCar extends Car {
    constructor(company, model, year, batteryCapacity) {
        super(company, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    chargeBattery() {
        console.log("Charging Electric car");
    }
}

class PetrolCar extends Car{
    constructor(company, model, year, tankCapacity) {
        super(company, model, year);
        this.tankCapacity = tankCapacity;
    }

    fillUpTank() {
        console.log("Filling up tank of a petrol car");
    }
    
}


const petrolCarObject = new PetrolCar("Ford", "Model LTY", 2023, 300);
petrolCarObject.startEngine();
petrolCarObject.fillUpTank();

const electricCarObject = new ElectricCar("Tesla", "Model S", 2021, "100 KW");
electricCarObject.startEngine();
electricCarObject.chargeBattery();