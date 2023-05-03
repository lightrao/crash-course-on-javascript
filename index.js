// street
// city
// zipCode
// showAddress(address)

const address = {
    street: "BaiYun Road",
    city: "KunMing",
    zipCode: 650024,
};

function showAddress(address) {
    for (let key in address) {
        console.log(`${key} is ${address[key]}.`);
    }
}

showAddress(address);