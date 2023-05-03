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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return first.toUpperCase;
};

//HigherOrder function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${str}`);

  console.log(`Transformed string: ${fn.name}`);

  transformer('Javascript is the best!', upperFirstWord);
  transformer('Javascript is the best!', oneWord);

  //JS callback all the time
  const high5 = function () {
    console.log('hand');
  };
  document.body.addEventListener('click', high5);
  ['jonas', 'Martha', 'Adam'].forEach(high5);
};

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Arun');

greeterHey('Hello')('Arun');

//Challenge

const greetArt = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Arun');

const lufthansa = {
  airline: 'Atlanta',
  lataCode: LH,
  Bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight${this.lataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.latacode} {flightNum}`, name });
  },
};
const movements = [200, 450, -400, 3000, -650, -130];

for (const movement of movement) {
  console.log('you deposited'`${movement}`);
}
