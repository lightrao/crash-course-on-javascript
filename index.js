const person = {
    firstName: "Albert",
    lastName: "Einstein",

    // fullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(`${person.firstName} ${person.lastName}`);

// console.log(person.fullName());

// getters=>access properties
// setters=>change (mutate) properties
console.log(person.fullName);
person.fullName = "Leonhard Euler";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);