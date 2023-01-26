const Factory = require("./class.js");
const fs = require('fs');

class Model {
  // static readTheater(cb) {
  //   fs.readFile("./data/theaters.json", "utf-8", (err, theaters) => {
  //     if (err) {
  //       cb(err, null);
  //     } else {
  //       theaters = JSON.parse(theaters);
  //       theaters = theaters.map(el => {
  //         return Factory.createTheater(el.id, el.name, el.movie);
  //       });
  //       cb(null, theaters);
  //     }
  //   });
  // }

  static readTheater(cb) {
    fs.readFile("./data/customers.json", "utf-8", (err, theaters) => {
      if (err) {
        cb(err, null);
      } else {
        theaters = JSON.parse(theaters);
        theaters = theaters.map(el => {
          return Factory.createTheater(
            el.id, el.name, el.gender, el.ticket
          );
        });
        cb(null, theaters);
      }
    });
  }

  static readCustomer(cb) {
    fs.readFile("./data/customers.json", "utf-8", (err, customers) => {
      if (err) {
        cb(err, null);
      } else {
        customers = JSON.parse(customers);
        customers = customers.map(el => {
          return Factory.createCustomer(
            el.id, el.name, el.gender, el.ticket
          );
        });
        cb(null, customers);
      }
    });
  }

  static checkSeat(theaterID, callback) {
    Model.readTheater((err, theaters) => {
      if (err) {
        callback(err, null);
      } else {
        let theater = theaters.find(el => el.id === theaterID);
        if (!theater) {
          callback(theaterID, null);
          return;
        }
        Model.readCustomer((err, customers) => {
          if (err) {
            callback(err, null);
          } else {
            theater.customers = customers.filter(el => el.ticket.theaterName === theater.name);
            callback(null, theater);
          }
        });
      }
    });
  }

  static findCustomer(customerID, cb) { // ticketInfo
    Model.readCustomer((err, customers) => {
      if (err) {
        cb(err, null);
      } else {
        let customer = customers.find(el => el.id === customerID);
        if (!customer) {
          cb(customerID, null);
          return;
        }
        cb(null, customer);
      }
    });
  }


  static showCustomerByTheater(theaterID, cb) {  // showCustomer
    Model.checkSeat(theaterID, (err, theater) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, theater);
      }
    });
  }

  static validateSeatNumber(seatNumber, row = 8, col = 5) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!alphabet.slice(0, col + 1).includes(seatNumber[0]) || isNaN(+seatNumber.slice(2))
      || +seatNumber.slice(2) < 1 || +seatNumber.slice(2) > row) {
      return false;
    }
    return true;
  }
}

module.exports = Model;