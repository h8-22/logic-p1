class PhoneSeriesX {
    constructor() {
        this.name = "Phone Series X"
        this.memory = 128
    }
}

class PhoneSeriesY {
    constructor() {
        this.name = "Phone Series Y"
        this.memory = 256
    }
}

class Factory {
    static createPhone(series) {
        let instance
        if (series === "X") {
            instance = new PhoneSeriesX()
        } else if (series === "Y") {
            instance = new PhoneSeriesY()
        }
        return instance
    }

    static bulkCreatePhone(total, series) {
        let phones = [];
        for (let i = 0; i < total; i++) {
            let instance
            if (series === "X") {
                instance = new PhoneSeriesX()
            } else if (series === "Y") {
                instance = new PhoneSeriesY()
            }
            phones.push(instance)
        }
        return phones
    }
}

let myPhone = Factory.createPhone("Y");
let phoneY = Factory.bulkCreatePhone(30, "X")

console.log(myPhone);
console.log(phoneY);