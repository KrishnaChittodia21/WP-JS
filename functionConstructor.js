function userDetails() {
  this.firstName = "Krishna";
  this.lastName = "Chittodia";
  console.log('Hello in this function')
}

var test = new userDetails();
console.log(test);

//* object can be created by calling a function also, in the above new means new object and userDetails() is invoking a function
//* 'this' variable points to a new object and that object is returned automatically

//? how do add a value to a particular object without adding to every object

userDetails.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

var test2 =  new userDetails();

console.log(userDetails)
console.log(test2.getFullName());