console.log(this);

function a() {
  console.log(this);
  this.krishValue = "Krishna"; // this will add it to global name space
}

function b() {
  console.log(krishValue);
}

a();
b();

var c = {
  name: "object c",
  func: function () {
    this.name = "object c is updated";
    console.log(this);
  },
};

c.func(); // in this it is a object in which its function is invoked so it will return its function context

// some irregularities in js

//incorrect

var d = {
  name: "object d",
  func: function () {
    this.name = "object c is updated";
    console.log(this);
    var setName = function (newName) {
      this.name = newName; // it suppose to update the this keyword for the d func property but instead updated the global window object
    };
    setName("Again updated object");
    console.log(this);
  },
};

d.func();

//correct

var e = {
  name: "object d",
  func: function () {
    var self = this;
    self.name = "object c is updated";
    console.log(self);
    var setName = function (newName) {
      self.name = newName;
    };
    setName("Again updated c object");
    console.log(self);
  },
};

e.func();
