let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!!!");

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

//Values and variables
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//Data Types//////////////////
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

JavaScriptIsFun = "Yes!"; //Reassigned with different values
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);

year = 1992;
console.log(typeof year);

console.log(typeof null);

//let const and var

let age = 30; //let can be used for reassigning values
age = 31;

const birthYear = 1992; //const - recommend dto use. Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

var job = "programmer"; //older way to use before  Es6
job = "teacher";

// lastName = "schmedtmann"; //Uncaught ReferenceError: Cannot access 'lastName' before initialization
// console.log(lastName);

//Basic operators
const now = 2023;
const ageJonas = now - 1992;
const ageAdiah = now - 2018;
console.log(ageJonas, ageAdiah);

console.log(ageJonas * 2, ageAdiah / 2, 2 ** 3); //2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Arun";
const lastName = "Subramani";
console.log(firstName + " " + lastName);

let x = 10 + 5; //15
x += 10; //x= x + 10 = 25
x *= 4; //x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//comparison opertor
console.log(ageJonas > ageAdiah);
console.log(ageAdiah >= 18);

const isFullAge = ageAdiah >= 18;
console.log(isFullAge);
console.log(now - 1992 > now - 2018);

//operator proceedence
let x1, y;
x1 = y = 25 - 10 - 5;
console.log(x1, y);

const averageAge = (ageJonas + ageAdiah) / 2;
console.log(ageJonas, ageAdiah, averageAge);

//Assignment

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

//String and Template Literals
const firstName1 = "Arun";
const jobs = "Engineer";
const birthYear1 = 1992;
const year1 = 2023;

const arun =
  "I'm " +
  firstName1 +
  ", a " +
  (year1 - birthYear1) +
  " years old " +
  jobs +
  "!";
console.log(arun);

//Template literals
const arunNew = `I'm ${firstName1}, a ${year1 - birthYear1} years old ${jobs}!`;
console.log(arunNew);

console.log(
  "String with \n\
multiple line \n\
lines"
);

console.log(`string with
multiple
lines`);

//if else
const ageSarah = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving licence🏍");
}

const ages = 15;
if (ages >= 18) {
  console.log("Sarah can start driving licence🏍");
} else {
  const yearsLeft = 18 - ages;
  console.log(`Sarah is too young. wait another ${yearsLeft} years🚓`);
}

const birthsYear = 1992;
let century;
if (birthsYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//2. coding challenge
const massMark2 = 78;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2 > BMIJohn2);

if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI is (${BMIMark2}) higher than John's (${BMIJohn2})!`);
} else {
  console.log(`John's ${BMIJohn2}) BMI is higher than Mark's (${BMIMark2})`);
}

//Type conversion and coercion
const inputYear = 1992;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 30);

console.log(Number("Arun"));
console.log(typeof NaN);
console.log(String(23), 23);

//Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

//Truthy and Falsy values
// There 5 Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean("Arun"));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Dont spent money!");
} else {
  console.log("You should get a Job!");
}

//Equality operator === vs == //Strict equality === recommended

const yourAge = 18;
if (yourAge === 18) console.log("you must be an adult (strict)");

if (yourAge == 18) console.log("you must be an adult(loose)");

const favourite = Number(prompt("What is your favourite number"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool! that's an awesome number");
} else if (favourite === 7) {
  console.log("7 is also a awesome number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite != 23) console.log("WHy not 23?");

//Boolen logic:AND OR NOT OPERATORS
//lOGICAL operators

const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("SomeOne should drive");
}

const isTired = true;
console.log(hasDriversLicence && hasGoodVision && isTired);

//Coding chalalenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins wins the trophy🗽");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas wins the tropohy🗼");
} else if (dolphinsScore === koalasScore) {
  console.log("Both wins the trophy🤣");
} else {
  console.log("No one wins the trophy😥");
}

//////////////////////////////////////
