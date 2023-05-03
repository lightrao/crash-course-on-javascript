// street
// city
// zipCode
// showAddress(address)

// Object literal
// const address = {
//     street: "BaiYun Road",
//     city: "KunMing",
//     zipCode: 650024,
// };

// Factory
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode,
//     };
// }

// const address = createAddress("BaiYun Road", "KunMing", 650224);
// console.log(address);

// Consturctor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address = new Address("BaiYun Road", "KunMing", 650224);
console.log(address);
