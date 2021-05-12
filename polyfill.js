//* it means to give a feature to the engine which it lacks

if (!Object.create) {
  Object.create = function (obj) {
    if (arguments.length > 1) {
      throw new Error("Object.create only accept one argument");
    }
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var newPerson = Object.create(person);
newPerson.firstName = "Krishna";
console.log(newPerson);
