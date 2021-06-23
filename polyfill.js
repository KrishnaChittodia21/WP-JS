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


let name = {
  firstName: "krishna",
  lastName: "chittodia",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      ", " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name, "Gzb");
printMyName("UP", "India");

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Gzb");
printMyName2("UP", "India");
