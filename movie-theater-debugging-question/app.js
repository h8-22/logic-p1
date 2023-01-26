const Controller = require('./controllers/controller.js');

const input = process.argv.slice(3);
const command = process.argv[2];

switch (command) {
    case "help":
        Controller.help();
        break;
    case "theaterList":
        Controller.theaterList();
        break;
    case "customerList":
        Controller.customerList();
        break;
    case "checkSeat":
        Controller.checkSeats(+input[0]);
        break;
    case "ticketInfo":
        Controller.ticketInfo(+input[0]);
        break;
    default:
        Controller.help();
        break;
}