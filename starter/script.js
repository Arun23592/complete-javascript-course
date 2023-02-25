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
