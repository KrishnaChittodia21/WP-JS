let arr = [
  {
    firstName: "Krishna",
    lastName: "C3",
    score: 3,
  },
  {
    firstName: "Dollu",
    lastName: "C4",
    score: 4,
  },
  {
    firstName: "Alia",
    lastName: "C1",
    score: 1,
  },
  {
    firstName: "Allie",
    lastName: "C2",
    score: 2,
  },
];

console.log(arr);
arr.sort((a, b) => {
  if (a.firstName > b.firstName) {
    return 1;
  }
  if (a.firstName < b.firstName) {
    return -1;
  }
  return 0;
});
console.log(arr);

//* Array.sort will not work for array of object, we have to pass a function to do so
