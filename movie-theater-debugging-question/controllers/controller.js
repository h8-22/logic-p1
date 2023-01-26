const Model = require('../models/model');
const View = require('../views/view');

class Controller {
  static help() {
    View.showCommandList();
  }
  static theaterList() {
    Model.readTheater({}, (err, data) => {
      if (err) {
        View.errMsg(err);
      } else {
        View.theaterList(data);
      }
    });
  }
  static customerList() {
    Model.readCustomer((err, data) => {
      if (err) {
        View.errMsg(err);
      } else {
        View.customerList(data);
      }
    });
  }
  static checkSeats(theaterID) {
    if (isNaN(theaterID)) {
      View.invalidID();
    } else {
      Model.checkSeat(theaterID, (err, data) => {
        if (err) {
          if (err === theaterID) {
            View.theaterNotFound(theaterID);
          } else {
            View.errMsg(err);
          }
        } else {
          View.checkSeat(data);
        }
      });
    }
  }
  static ticketInfo(customerID) {
    if (isNaN(customerID)) {
      View.invalidID();
    } else {
      Model.findCustomer(customerID, (err, data) => {
        if (err) {
          if (err === customerID) {
            View.customerNotFound(customerID);
          } else {
            View.errMsg(err);
          }
        } else {
          console.log(data);
          View.ticketInfo(data);
        }
      });
    }
  }
}

module.exports = Controller;