// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 5 and 3 => FizzBuzz
// Not divisible by 3 or 5 => same as input
// Not a number => "Not a number"

function fizzBuzz(input) {
    if (typeof input !== "number") return "Not a number";
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
}

for (let i = 1; i <= 15; i++) {
    console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz("hi"));