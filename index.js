// const first = [1, 2, 3];
// const second = [4, 5, 6];
const first = [{ id: 1 }, { id: 2 }, { id: 3 }];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];
// first[0].id = 10;
console.log(combined);

// const copy = combined.slice();
const copy = [...combined];
first[0].id = 10;
console.log(copy);