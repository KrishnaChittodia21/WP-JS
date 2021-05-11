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


//* we can use call method which lets us decide what should be the 'this' keyword

printUserDetails.call(userDetails) //* we can also pass arguments if required by the function .call('arg1', 'arg2')

//* we can also use apply which works exactly same with one difference i.e it accepts array of arguments instead of separate argument

printUserDetails.apply(userDetails);