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
  firstName: "jons",
  lastName: "arun",
  age: 2037 - 1992,
  friends: ["michel", "arun", "bob"],
};
