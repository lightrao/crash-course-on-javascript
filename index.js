// String primitive
const myString = 'hi';
console.log(typeof myString);

// String object
const mySecondString = new String('hi');
console.log(typeof mySecondString);


const message = "This is my first message";
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('good'));
console.log(message.startsWith('Thi'));
console.log(message.endsWith('age'));
console.log(message.indexOf('is'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.split(' '));

const message2 = '   Hello world!   ';
console.log(message2.trim());

// escape notation
const message3 = 'I\'m a \ngood man';
console.log(message3);

