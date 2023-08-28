function person() {
    this.name = "Ashish";
}

const myPerson1 = new person();
const myPerson2 = new person();
console.log(myPerson1);
console.log(myPerson2);

function Car(companyName, modelName) {
    this.model = modelName;
    this.companyName = companyName;
    this.printWhoAmI = function() {
        console.log(`My company name is ${this.companyName} and my model is ${this.model}`);
    }
}

const hondaCity = new Car("Honda", "City");
const marutiSwift = new Car("Maruti", "Swift");
console.log(hondaCity);
console.log(marutiSwift);
hondaCity.printWhoAmI();
marutiSwift.printWhoAmI();

marutiSwift.carRegistrationNumber = "HR3412312";
console.log(marutiSwift);
console.log(hondaCity);