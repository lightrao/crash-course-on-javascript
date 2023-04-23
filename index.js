const person = {
    name: "ZhangSan",
    age: 33,
    weight: 75,
    height: 180
};

for (key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);