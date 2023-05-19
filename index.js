// sum(1,2,3,4) -> 10
// sum([1,2,3,4]) -> 10

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }

  return items.reduce((a, c) => a + c);
}
console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));
