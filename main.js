// Vehicle class
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

// Car class inheriting from Vehicle
class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// Plane class inheriting from Vehicle
class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// Employee class
class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
}

// Driver class inheriting from Employee
class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
        super(name, id, dateOfBirth);
        this.licenseId = licenseId;
    }
}

// Pilot class inheriting from Employee
class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
        super(name, id, dateOfBirth);
        this.licenseId = licenseId;
    }
}

// Reservation class
class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationId = reservationId;
    }
}

// Array to store reservations
let reservations = [];

// Function to handle reservations
function makeReservation(employeeId, vehicleId) {
    const employee = employees.find(e => e.id === employeeId);
    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("Pilots cannot drive cars!");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("Drivers cannot pilot planes!");
    } else {
        const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
        reservations.push(reservation);
        console.log("Reservation made successfully!");
    }
}

// Creating objects
const car1 = new Car("Car 1", "Manufacturer A", 1, "Gas");
const car2 = new Car("Car 2", "Manufacturer B", 2, "Electric");
const car3 = new Car("Car 3", "Manufacturer C", 3, "Gas");

const plane1 = new Plane("Plane 1", "Manufacturer X", 4, "Commercial");
const plane2 = new Plane("Plane 2", "Manufacturer Y", 5, "Private");

const driver1 = new Driver("Driver 1", 101, "01/01/1990", "D123");
const pilot1 = new Pilot("Pilot 1", 201, "02/02/1985", "P456");

// Adding objects to arrays
const vehicles = [car1, car2, car3, plane1, plane2];
const employees = [driver1, pilot1];

// Making reservations
makeReservation(101, 1); // Successful reservation
makeReservation(201, 4); // Pilots cannot drive cars
makeReservation(101, 4); // Drivers cannot pilot planes

// Displaying reservations using map
console.log("\nReservations:");
reservations.map(reservation => {
    console.log(`ID: ${reservation.reservationId}, Employee ID: ${reservation.employeeId}, Vehicle ID: ${reservation.vehicleId}, Date: ${reservation.reservationDate}`);
});
