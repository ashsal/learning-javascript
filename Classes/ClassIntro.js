class WagonR {
    constructor() {
        console.log("Constructor called");
        this.model = "Wagon R Sports";
        this.year = "2023";
        this.carNumber = "";
    }

    setCarNumber(carNumber) {
        this.carNumber = carNumber;
    } 

    printModelAndYear() {
        console.log("Model is", this.model, "Year is:", this.year);
    }

    printModelYearAndCarNumber() {
        console.log("Model is", this.model, "Year is:", this.year, "Car number is:", this.carNumber);
    }
}

const wagonRCar1 = new WagonR();
wagonRCar1.printModelAndYear();

const wagonRCar2 = new WagonR();
wagonRCar2.printModelAndYear();

//wagonRCar2.setCarNumber("DL12 8767");
wagonRCar2.printModelYearAndCarNumber();
