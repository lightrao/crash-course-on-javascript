// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// console.log(combined);

// const slice = combined.slice(2, 4);
// console.log(slice);

const first = [{ id: 1 }, { id: 2 }];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
// first[1]['id'] = 20;
// console.log(combined);

const slice = combined.slice(1, 3);
console.log(slice);
first[1].id = 20;
console.log(slice);