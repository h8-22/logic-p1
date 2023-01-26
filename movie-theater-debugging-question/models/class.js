class Factory {
    static createTheater(id, name, movie, customers) {
        return new Theater(id, name, movie, customers);
    }
    static createCustomer(id, name, gender, theaterName, ticket) {
        return new Customer(id, name, gender, theaterName, ticket);
    }
    static createTicket(theaterName, type, movie, seatNumber) {
        if (type === "Regular") {
            return new Regular(theaterName, movie, seatNumber);
        } else if (type === "IMAX") {
            return new IMAX(theaterName, movie, seatNumber);
        } else if (type === "Premiere") {
            return new Premiere(theaterName, movie, seatNumber);
        }
    }
}

class Theater {
    constructor(id, name, movie, customers = []) {
        this.id = id;
        this.name = name;
        this.movie = movie;
        this.customers = customers;
    }
}

class Customer {
    #ticket
    constructor(id, name, gender, ticket) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.ticket = Factory.createTicket(ticket.theaterName, ticket.type, ticket.movie, ticket.seatNumber);
    }


    nameWithHonorifics() {
        if (this.gender === "Male") {
            return `Mr. ${this.name}`;
        } else if (this.gender === "Female") {
            return `Mrs. ${this.name}`;
        }
        return `Mx. ${this.name}`;
    }
}

class Ticket {
    #seatNumber
    // #premiere
    constructor(theaterName, type, movie, seatNumber) {
        this.theaterName = theaterName;
        this.type = type;
        this.movie = movie;
        this.#seatNumber = seatNumber;
    }
    get seatNumber() {
        return this.#seatNumber;
    }
    set seatNumber(value) {
        this.#seatNumber = value;
    }
    toJSON() {
        return {
            theaterName: this.theaterName,
            name: this.name,
            type: this.type,
            movie: this.movie,
            seatNumber: this.#seatNumber
        }
    }
}
class Regular extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "Regular", movie, seatNumber);
    }
}
class IMAX extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "IMAX", movie, seatNumber);
    }
}
class Premiere extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "Premiere", movie, seatNumber);
    }
    //Override 
    get seatNumber(){
        return "classified"
    }

}

module.exports = Factory;