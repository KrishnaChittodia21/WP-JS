//* This method invokes a method (function) by specifying the owner object.

var userDetails = {
  firstName: "krishna",
  secondName: "chittodia",
  printDetails: function () {
    // console.log(this);
    return this.firstName + " " + this.secondName;
  },
};

var printUserDetails = function () {
  console.log("Name :", this.printDetails()); //! it will give error on calling printUserDetails
};

//* Correct Version with use bind which will create an exact new copy

var printNew = printUserDetails.bind(userDetails);
printNew();
