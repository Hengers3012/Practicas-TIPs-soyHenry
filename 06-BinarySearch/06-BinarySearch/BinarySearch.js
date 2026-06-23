function BinarySearch(arr, value, result = []) {
  // Tu código aquí
}

module.exports = BinarySearch;

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

// ? Cuando el valor se encuentra en el array
console.log(BinarySearch(testArray, 13)); //[13];
console.log(BinarySearch(testArray, 5)); //[13, 5];
console.log(BinarySearch(testArray, 0)); //[13, 5, 2, 0];
console.log(BinarySearch(testArray, 1)); //[13, 5, 2, 0, 1];
console.log(BinarySearch(testArray, 2)); //[13, 5, 2];

// ? Cuando el valor no se encuentra en el array
console.log(BinarySearch(testArray, 6)); //"Value not found";
console.log(BinarySearch(testArray, 24)); //"Value not found";
console.log(BinarySearch(testArray, 50)); //"Value not found";
console.log(BinarySearch(testArray, 71)); //"Value not found";
