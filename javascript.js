let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

name = "Yaroslav";
surname = "Gabriel";

console.log(name);
console.log(surname);

let favnumber = 4;

console.log(favnumber);

favnumber = 7;

console.log(favnumber);

const pi = 3.14;

console.log(pi);


console.log((4 + 6 + 9) / 77);

let a = 10;

console.log(a);

a = 15;

console.log(a);

let b = a * 10;

console.log(b);

let diferent = a + b + name;

console.log(diferent);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

let x = 9 % 4;
console.log(x);

let y = "5";
let z = y === "5";
console.log(z);

let counter = 1;

++counter;
console.log(counter);
counter++;
console.log(counter);

let w = "1";
console.log(+w);

console.log(Infinity);

let k = 4 > 3;
console.log(k);

k = 5 > 6;
console.log(k);

let age = null;
console.log(age);

let myage;
console.log(myage);

console.log(typeof z);

let string = "Hello world!";
console.log(string);

const badString = string;
console.log(badString);

let somename = "Cris";
let hisname = `My name is ${somename}!`;
console.log(hisname);

const firstPart = "Hello, ";
const secondPart = "my name is ";
const thirdPart = "Cris!";
const full = `${firstPart}${secondPart}${thirdPart}`;
console.log(full);


const button = document.querySelector("button");

function greet() {
    const ame = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${ame}, it is nice to see you!`;
    console.log(ame);
};

button.addEventListener ("click", greet);