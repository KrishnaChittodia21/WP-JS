let userDetails = {
  firstName: "Krishna",
  secondName: "Chittodia",
  address: {
    country: "IN",
    state: "UP",
  },
  birthDate: new Date(),
  fun: function () {
    console.log("hello world");
  },
};

let newName = userDetails;
console.log(newName);

newName.firstName = "kannu";

console.log(newName, userDetails);
// ! here it changes the name of referenced object also

//? so we can either use spread operator or JSON.parse(JSON.stringify(userDetails))

let newName2 = { ...userDetails };

newName2.firstName = "test";

console.log(newName2, userDetails);

// ! but problem with spread operator is that it does not do..
// !...deep copy so in case of nested object with in an object it will fail

newName2.address.country = "EU";

console.log(newName2, userDetails);

//? so we can use JSON.parse(JSON.stringify(userDetails))

let newName3 = JSON.parse(JSON.stringify(userDetails));

newName3.firstName = "test3";
newName3.address.country = "USA";

console.log(newName3, userDetails);

//! but here also if we use date or any function then...
//! ...it will not copy function and type of date is changed from object to string

console.log(newName3, userDetails);
console.log(typeof userDetails.birthDate);
console.log(typeof newName3.birthDate);

//* so final resolution is using loadash deepclone;
