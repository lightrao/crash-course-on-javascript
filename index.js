let person = {
  name: "ZhangSan",
  age: 33,
};
console.log(person);

// Dot Notation
console.log(person.name);
// Bracket Notation
console.log(person["name"]);

person.age = 22;
console.log(person);

person["age"] = 33;
console.log(person);

// Bracket Notation for Unknown Attribute
let person2 = {
  name: "LiSi",
  age: 12,
};
let selection = "name";
console.log(person2[selection]);
selection = "age";
console.log(person2[selection]);
