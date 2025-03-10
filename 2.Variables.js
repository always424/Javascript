// 1. declaration  let x;
// 2. initialization  x = 10;
// 3. use  console.log(x);

let x;
x = 100;

let y = 200;


console.log(x);
console.log(y);

// Number---
let age = 25;
let price = 10.99;
let gpa = 2.1
console.log(`You are ${age} years old.`);
console.log(`The price is $${price} dollars.`);
console.log(`Your gpa is ${gpa}`);

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

// String---
let firstName = "Nafis";
let lastName = "Abdullah";
let fullName = firstName + " " + lastName;

console.log(`Hello, my name is ${fullName}`);

console.log(typeof firstName);

// Boolean---
let online = true;

console.log(`Bro is ${online}`);

console.log(typeof online);



// Project---

let fullName = "Nafis Abdullah";
let age = 14;
let student = false;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="/Website/style.css">
// </head>
// <body>
//     <p id="p1"></p>
//     <p id="p2"></p>
//     <p id="p3"></p>
//     <script src="/Website/index.js"></script>
// </body>
// </html>
