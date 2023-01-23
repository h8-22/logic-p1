// let a= 2;
// console.dir(a);

// class Smarthphne {
//     constructor(brand, memory){
//         this.brand = brand
//         this.memory = memory
//     }

// static sendEmail(sneder, receiver, content){
//     console.log(`To: ${receiver} \nFrom: ${sender}\n`)
//     console.log(`To: ${receiver} \nFrom: ${sender}\n`)
//     console.log(`To: ${receiver} \nFrom: ${sender}\n`)
//     console.log(`To: ${receiver} \nFrom: ${sender}\n`)
// }


// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

class Car {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return "Hello!!";
    }
}

let myCar = new Car("Ford");
console.log(myCar);
console.log(myCar.hello());

  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
  // this will raise an error.