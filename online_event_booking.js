class User {
    static userCount = 0;

    constructor(username, userId, email, phoneNumber) {
        this.username = username;
        this.userId = userId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        User.userCount++;
    }


    registerUser() {
        console.log(`Welcome, ${this.username}, you have successfully registered`);
    }

    login() {
        console.log(`Hello ${this.username}, you are logged in successfully.`);
    }

    static getTotalUsers() {
        console.log(`Total registered users: ${User.userCount}`);
    }

    getUserDetail() {
        return {
            username: this.username,
            userId: this.userId,
            email: this.email,
            phoneNumber: this.phoneNumber
        };
    }
}


class Event {
    static totalEvents = 0;

    constructor(eventId, name, venue, date) {
        this.eventId = eventId;
        this.eventName = name;
        this.eventVenue = venue;
        this.eventDate = date;
        Event.totalEvents++;
    }

    getEventDetail() {
        return {
            eventId: this.eventId,
            name: this.eventName,
            venue: this.eventVenue,
            date: this.eventDate
        };
    }

    updateEventDetail(name, venue, date) {
        this.eventName = name;
        this.eventVenue = venue;
        this.eventDate = date;
        console.log(`Event ${this.eventId} updated.`);
    }

    static getTotalEvents() {
        console.log(`Total events created: ${Event.totalEvents}`);
    }
}


class Ticket {
    static paymentCount = 0;

    constructor(price, eventId, ticketId) {
        this.price = price;
        this.eventId = eventId;
        this.ticketId = ticketId;
        Ticket.paymentCount++;
    }

    generateTicket() {
        console.log(`Ticket ${this.ticketId} generated for Event ${this.eventId}.`);
    }

    static getTotalPayments() {
        console.log(`Total payments made: ${Ticket.paymentCount}`);
    }
}

class OnlinePaymentTicket extends Ticket {
    constructor(price, eventId, ticketId, paymentReference) {
        super(price, eventId, ticketId);
        this.paymentReference = paymentReference;
    }

    confirmPayment() {
        console.log(`Online payment confirmed with reference: ${this.paymentReference}.`);
    }
}

class CashPaymentTicket extends Ticket {
    constructor(price, eventId, ticketId, receiptNumber) {
        super(price, eventId, ticketId);
        this.receiptNumber = receiptNumber;
    }

    confirmPayment() {
        console.log(`Cash payment confirmed with receipt: ${this.receiptNumber}.`);
    }
}

// Check below for example usage

//User Class
const user1 = new User("Chinedu", 1, "oyiohachinedujude@gmail.com", "07039564850");
user1.registerUser();
user1.login();
console.log(user1.getUserDetail());

const user2 = new User("Jude", 2, "oyiohascott@gmail.com", "09073398604");
user2.registerUser();
user2.login();
console.log(user2.getUserDetail());
User.getTotalUsers();


//Event Class
const event1 = new Event(50, "Watch Chelsea Match", "Peter Mbah Hall", "20-01-2025");
console.log(event1.getEventDetail());
event1.updateEventDetail()
const event2 = new Event(51, "See the movie Waiter", "Akpabio Hall", "30-01-2025");
console.log(event2.getEventDetail());
event2.updateEventDetail();
const event3 = new Event(52, "Watch Basket Ball", "Otti Hall", "14-02-2025");
console.log(event3.getEventDetail());
event3.updateEventDetail();
Event.getTotalEvents();

//Payment Class
const onlinePayment = new OnlinePaymentTicket(100, event1.eventId, "T201", "ONL12345");
onlinePayment.generateTicket();
onlinePayment.confirmPayment();

const cashPayment = new CashPaymentTicket(80, event2.eventId, "T202", "RCPT56789");
cashPayment.generateTicket();
cashPayment.confirmPayment();
Ticket.getTotalPayments();