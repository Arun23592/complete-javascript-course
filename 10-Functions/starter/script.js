'use strict';

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

const flight = 'LH434';
const arun = {
  name: 'Arun s',
  passport: '2324558789',
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'L999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2324558789) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, arun);
console.log(flight);
console.log(arun);

//IS the same as doing
const flightNumber = flight;
const passenger = arun;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(arun);
checkIn(flight, arun);
