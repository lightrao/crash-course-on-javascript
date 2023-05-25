const numbers = [1, 2, 3, 4, 5, 6, 7];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset!");
    return;
  }

  const output = [...array];
  const elementWillMove = output.splice(index, 1)[0];
  output.splice(position, 0, elementWillMove);
  return output;
}

const output = move(numbers, 2, 3);
console.log(output);
// [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 4, 5, 6, 3, 7]
