// Activating Strict Mode
"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//Functions
function logger() {
  console.log("My name is Arun");
}

//calling, invoking, running function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const fruitJuice = `Juice with ${apples} apples and ${oranges} oranges`;
  return fruitJuice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);

//Function declaration

function ageCalc(birthYear) {
  return 2037 - birthYear;
}

const age1 = ageCalc(1992);
console.log(age1);

//Function expression

const agecalc2 = function (birthYear2) {
  return 2037 - birthYear2;
};

const agecal = agecalc2(1991);
console.log(agecal);

//Arrow Function
const agecalc3 = function (birthYear2) {
  return 2037 - birthYear2;
};

const age3 = (birthYear2) => 2037 - birthYear2;
console.log(age3(1991));

const yearRetirement = (birthYear3, firstname) => {
  const age = 2023 - birthYear3;
  const retirement = 60 - age;
  // return retirement;
  return `${firstname} retires in ${retirement}`;
};

console.log(yearRetirement(1991, "jonas"));
console.log(yearRetirement(2023, "bob"));

//Function calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const fruitJuice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return fruitJuice;
}

console.log(fruitProcessor(2, 3));

//Coding challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.
// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

const calcAverage = (a, b, c) => a + b + c / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(64, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins....");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

//Introduction to Arrays
const friends = ["micheal", "steven", "bob", "Jonas"];
console.log(friends);

const years = new Array(1991, 1992, 200, 2010);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = "Arun";
console.log(friends);

friends[3] = "Adiah";
console.log(friends);

const firstname = "Arun";
const arun = [firstname, "subramani", 2037 - 1992, "teacher", friends];
console.log(arun);
console.log(arun.length);

//Excercise
const calcAge = function (birthYears) {
  return 2037 - birthYears;
};
const years1 = [1990, 1967, 2007, 2010, 2018];
const agee1 = calcAge(years1[0]);
const agee2 = calcAge(years1[1]);
const agee3 = calcAge(years1[years.length - 1]);
console.log(agee1, agee2, agee3);

const ages = [calcAge(years[0]), calcAge(years[1])];
calcAge(years[years.length - 1]);
console.log(ages);

//Add Methods
const friends1 = ["micheal", "steven", "bob", "Jonas", "Peter"];
const newLength = friends1.push("Jay");
console.log(friends1);
console.log(newLength);

friends1.unshift("John");
console.log(friends1);

//Remove elements
friends1.pop();
const popped = friends1.pop();
console.log(friends1);
console.log(popped);

friends1.shift();
console.log(friends1);

console.log(friends1.indexOf("steven"));
console.log(friends1.indexOf("bob"));

friends1.push(23);
console.log(friends1.includes("steven"));
console.log(friends1.includes("bob"));
console.log(friends1.includes("23"));

if (friends1.includes("steven")) {
  console.log("You hve a friend called steven");
}

//coding challenge #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//Introrduction objects

const jonasArray = ["jons", "arun", 2037 - 1992, ["michel", "arun", "bob"]];

const jonasArray1 = {
  firstName: "jonas",
  lastName: "arun",
  age: 2037 - 1992,
  friends: ["michel", "arun", "bob"],
};

console.log(jonasArray1);

console.log(jonasArray1.lastName);

console.log(jonasArray1["lastName"]);

const nameKey = "Name";
console.log(jonasArray1["first" + nameKey]);
console.log(jonasArray1["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about JonasArray1? Choose between firstName, lastName, age, job and friends"
);
console.log(jonasArray1[interestedIn]);

if (jonasArray1[interestedIn]) {
  console.log(jonasArray1(interestedIn));
} else {
  console.log(
    "Wrong request!  Choose between firstname, lastName, age, job, friends"
  );
}

jonasArray1.location = "Portugal";
jonasArray1["twitter"] = "@subramani";
console.log(jonasArray1);

console.log(
  `${jonasArray1.firstName} has ${jonasArray1.friends.length}, and his best friend is called ${jonasArray1.friends[0]}`
);

//Objects Methods
// const jonasArray2 = {
//   firstName: "jonas",
//   lastName: "arun",
//   birthYear: 1992,
//   friends: ["michel", "arun", "bob"],

//   calAge: function () {
//     // console.log(this)
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calAge()}
//     -year old ${jonasArray2.job}`;
//   },
// };
// console.log(jonasArray2.calAge());
// console.log(jonasArray2.age());

//Coding challenge
const mark = {
  fullName: "Mark miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height == 2;
    return this.bmi;
  },
};
const John = {
  fullName: "john smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height == 2;
    return this.bmi;
  },
};
mark.calcBMI();
John.calcBMI();
console.log(mark.bmi, John.bmi);

if (mark.bmi > John.bmi) {
  console.log(
    `${mark.fullName} BMI(${mark.bmi}) i higher than ${John.fullName}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${John.fullName} BMI(${mark.bmi}) is higher than ${mark.fullName}`
  );
}

//Iterate The For Loop:

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repition🏋️‍♂️ ${rep}`);
}

const jonasArray3 = {
  firstName: "jonas",
  lastName: "arun",
  age: 2037 - 1992,
  friends: ["michel", "arun", "bob"],
};

for (let i = 0; i < jonasArray3.length; i++) {
  console.log(jonasArray3[i], typeof jonasArray3[i]);

  // types[i] = typeof jonasArray3[i];
  types.push(typeof jonasArray3[i]);
}
console.log(types);

const years2 = [1907, 2001, 2007, 2020];
const age4 = [];

for (let i = 0; i < years2.length; i++) {
  ages.push(2023 - years2[i]);
}

//COntinue break
console.log("----Only break---");
for (let i = 0; i < jonasArray3.length; i++) {
  console.log(jonasArray3[i], typeof jonasArray3[i]);

  // types[i] = typeof jonasArray3[i];
  types.push(typeof jonasArray3[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

//while loop
let rep = 1;
while (rep <= 1) {
  console.log(`While: Lifting weight repitions ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}

//Coding challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/
const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];

for (let i = 0; i < billss.length; i++) {
  const tipss = calcTip2(billss[i]);
  tipss.push;
  totals.push(tip + billss[i]);
}
console.log(billss, tipss, totals);
const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
