const now = new Date();
// now.setFullYear(2024);
// now.setDate(5);
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDay());

const date1 = new Date('May 11 2024 09:00');
console.log(date1);
const date2 = new Date(2024, 4, 11, 9);
console.log(date2);
