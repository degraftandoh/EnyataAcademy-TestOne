
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

const unsortedArray = [8, 2, 5, 1, 9, 3, 7, 4, 6];

const ascendingSortedArray = sortAscending(unsortedArray);
console.log(ascendingSortedArray);

const descendingSortedArray = sortDescending(unsortedArray);
console.log(descendingSortedArray);
