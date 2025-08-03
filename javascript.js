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

const string1 = "Hi there!";
const string2 = 'Hello';
const string3 = `Hello again`;
const string4 = new String('Hello world, like an object');

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log("Hello"[0]);

const myString = "string";
console.log(myString);

const reallyBadString = myString;
console.log(reallyBadString);

let whatIsTextLenght = reallyBadString.length;
console.log(whatIsTextLenght);

console.log(myString[0]);

console.log(string1.concat(' ',string2));

const stringSlice = "How are How you doing today?";
console.log(stringSlice.replace(/HOW/ig, "What"));

let insertText = "I love all dogs and cats";
insertText = "I don`t like Cats, cAts, caTs and dogs, dogs, dogs!";

insertText = insertText.replaceAll(/cats/ig, "fruits");
insertText = insertText.replaceAll("dogs", "vegetables");

document.getElementById("demo").innerHTML = insertText;

console.log(2 == 2);

let result = 2 > 2;

if (result) {
    document.getElementById("demo").innerHTML = "if is true";
} else if (result = 2 == 4) {
    document.getElementById("demo").innerHTML = "if else is true";
} else {
    document.getElementById("demo").innerHTML = "else is true";   
}

let text;

if (Math.random() > 0.5) {
    text = "Hello!";
    document.getElementById("demo").innerHTML = text;   
} else {
    text = "Buy!";
    document.getElementById("demo").innerHTML = text;   
}

let hour = 9;
if (hour >= 9 && hour <= 18) {
    console.log("The office is open");
}

let username = prompt("Who are you?");
if (username === "Admin") {
    let password = prompt("What`s the password?");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password!");
    }
} else {
    alert("I don`t know you!")
}

let cheese = "";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}




