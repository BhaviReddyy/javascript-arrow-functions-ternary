// a) Arrow function isEven(n)
const isEven = (n) => n % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(7)); // false


// b) Using ternary operator for Pass/Fail
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log(result); // Pass


// c) greet(name) with ternary (default: Guest)
const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Bhavya")); // Hello, Bhavya
console.log(greet()); // Hello, Guest