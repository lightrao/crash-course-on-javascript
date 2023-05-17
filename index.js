const person = {
    firstName: "Albert",
    lastName: "Einstein",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('You should supply a string for full name!');
        }
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('You must enter first name and last name!');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    // person.fullName = 11;
    // person.fullName = "";
    person.fullName = "Leonhard Euler";
} catch (error) {
    console.log(error);
}
console.log(person.fullName)

