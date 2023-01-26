class View {
  static showCommandList() {
    console.log(`
node app.js
node app.js help
node app.js theaterList
node app.js customerList
node app.js checkSeat <id_theater>
node app.js ticketInfo <id_penonton>
    `);
  }

  static errMsg(err) {
    console.log(err);
  }

  static invalidID() {
    console.log("Please enter a valid ID");
  }

  static invalidSeatNumber() {
    console.log('Please enter a valid seat number');
  }

  static theaterNotFound(id) {
    console.log(`Theater not found, please check your input`);
  }

  static customerNotFound(id) {
    console.log(`Customer not found, please check your input`);
  }

  static seatOccupied(seat) {
    console.log(`Seat is already booked, please choose another seat`);
  }

  static theaterList(theaters) {
    theaters = theaters.map(theater => {
      return {
        "Theater ID": theater.id,
        "Theater Name": theater.name,
        "Movie": theater.movie
      }
    });
    console.table(theaters);
  }

  static customerList(customers) {
    customers = customers.map(customer => {
      return {
        "ID": customer.id,
        "Name": customer.name,
        "Gender": customer.gender,
        "Theater Name": customer.ticket.theaterName
      }
    });
    console.table(customers);
  }

  static ticketInfo(customer) {
    console.log(`This ${customer.ticket.type} ticket are booked for ${customer.name} to watch ${customer.ticket.movie} with seat number ${customer.ticket.seatNumber}`);
    
  }

  static checkSeat(theater) {
    let seats = View.generateSeats();
    seats = View.populateSeats(seats, theater, 'X');

    View.theaterInfo(theater, seats);
  }

  static showCustomerByTheater(theater) {
    let seats = View.generateSeats()
    seats = View.populateSeats(seats, theater, "name");

    View.theaterInfo(theater, seats);
  }

  static theaterInfo(theater, seats) {
    console.log(`
==========================
ID           : ${theater.id}
Name         : ${theater.name}
Movie        : ${theater.movie}
==========================
      Seating Plan
    `);
    console.table(seats);
  }
  static generateSeats() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const row = 8;
    const col = 5;
    let seats = [];
    for (let i = 0; i <= row; i++) {
      let temp = [];
      for (let j = 0; j <= col; j++) {
        if (i === 0) {
          temp.push(alphabet[j]);
        } else {
          temp.push(" ");
        }
      }
      seats.push(temp);
    }
    return seats;
  }

  static populateSeats(seats, theater, display = 'X') {
    if (display === 'X') {
      theater.customers.forEach(customer => {
        let iter = 0;
        seats[0].forEach(seatChar => {
          if (seatChar === customer.ticket.seatNumber[0]) {
            seats[customer.ticket.seatNumber[2]][iter] = 'X';
          }
          iter++;
        });
      });
    } else if (display === "name") {
      theater.customers.forEach(customer => {
        let iter = 0;
        seats[0].forEach(seatChar => {
          if (seatChar === customer.ticket.seatNumber[0]) {
            seats[customer.ticket.seatNumber[2]][iter] = customer.nameWithHonorifics();
          }
          iter++;
        });
      });
    }
    return seats;
  }
}

module.exports = View;