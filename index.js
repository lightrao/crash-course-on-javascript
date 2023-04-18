// 1 = 00000001
// 2 = 00000010
// | = 00000011
console.log(1 | 2);

// 1 = 00000001
// 2 = 00000010
// & = 00000000
console.log(1 & 2);

// 1 = 00000001
// 2 = 00000010
// ^ = 00000011
console.log(1 ^ 2);

// read, write, execute
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

// add permission
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

// check permission
let message = (myPermission & executePermission) ? "yes" : "no";
console.log(message);