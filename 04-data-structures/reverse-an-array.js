function reverseArray(passedInArray) {
  //takes an array as argument and produces a new array that has the same elements in reverse order
  const arr = [];
  for (let i = passedInArray.length - 1; i >= 0; i--) {
    arr.push(passedInArray[i]);
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
