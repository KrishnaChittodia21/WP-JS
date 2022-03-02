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


//* we can use call method which lets us decide what should be the 'this' keyword

printUserDetails.call(userDetails) //* we can also pass arguments if required by the function .call('arg1', 'arg2')

//* we can also use apply which works exactly same with one difference i.e it accepts array of arguments instead of separate argument

printUserDetails.apply(userDetails);

//* The call() allows for a function/method belonging to one object to be assigned and called for a different object.
//* call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.