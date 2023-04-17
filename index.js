// result of a logical expression is not necessarily a true or false
console.log(false || true);
console.log(false || "hello");
console.log(false || 1);

console.log(true && false);
console.log(33 && null);
console.log("hello" && 0);

// short-circuiting
console.log(false || 1 || 2);
console.log(true && 0 && "hello");

// using the logical operator between nonbooleans
let userColor = null;
let defaultColor = "white";
let currentColor = userColor || defaultColor;
console.log(currentColor);

let coins = 3;
(coins >= 6) && console.log("You win!");
(coins < 6) && console.log("You lose!");