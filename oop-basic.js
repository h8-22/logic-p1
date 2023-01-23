//Abstraction
//Encapsulation
//Inheritance

class Smartphone {
    #iMEI;
    #phoneNumber;
    constructor(name, type, os, color) {
        this.name = name;
        this.type = type;
        this.os = os;
        this.color = color;
        this.#iMEI = "123456789";
        this.#phoneNumber = "081214801007"
    }

    get iMEI() {
        return this.#iMEI;
    }

    set phoneNumber(newPhoneNumber) {
        this.#phoneNumber = newPhoneNumber;
    }



    switchOn() {
        console.log("Phone is aldready on!");
        // return this;
    }

    getInformation() {
        console.log(`Smartphone ${this.name}, iMEI: ${this.#iMEI}, phoneNumber: ${this.#phoneNumber}`);
        // return this;
    }
}

let iPhone = new Smartphone("iPhone", 13, "iOS", "Black");
let android = new Smartphone("Samsung", "S22", "Android", "Blue");
// console.log(iPhone.switchOn());
// console.log(android.getInformation());
// console.log(iPhone.iMEI);

// console.log(phoneNumber("082129065841"));
// console.log(android.getInformation());
androidset(phoneNumber("081221123"))
// console.log(android.getInformation());