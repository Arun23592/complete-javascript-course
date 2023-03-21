'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `orderReceived${this.starterIndex} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Viva del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c: 14 };
({ a1, b1 } = obj);
console.log(a1, b1);

//Nested objects
// const {
//   fri: { opoen },
// } = { openingHours };
//destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 Return valuesfrom function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, (4)[(5, 6)]];
// const [i, j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring object

//Spred opoerator
const arr1 = [7, 8, 9];
const badNewwArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewwArray);

const newArray = [1, 2, ...arr1];
console.log(newArray);

console.log(...newArray);
console.log(1, 2, 7, 8, 9);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.starterMenu];

//join 2 array
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//iterables: trings, maps, sets
const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);

const ingrediants = [
  prompt("Let's make pasta! Ingrediants1?"),
  prompt("Let's make pasta! Ingrediants 2?"),
];

//SPREAD because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

//REST, because on LEFt SIDE OF =
const [a5, b5, ...others] = [1, 2, 3, 4, 5];
console.log(a5, b5, others);

// const [Pizza, , Risotto, ...otherFood] = {
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// };
// console.log(Pizza, Risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

//Loop Arrays: for-loop
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i}+1, {el}+1`);
}
