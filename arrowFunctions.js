//* unlike regular function arrow functions does not have their own this

var obj1 = {
  name: "krishna",
  nF: function () {
    console.log("Hello Normal Function", this.name);
  },
  aF: () => {
    console.log("Hello arrow functions", this.name);
  },
};

obj1.nF();
obj1.aF();

var obj2 = {
  valueOfThis: function(){
    return this;
  }
}
var obj3 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj2.valueOfThis(); // Will return the object obj1
obj3.valueOfThis(); // Will return window/global object

/* An arrow function expression is a compact alternative to a traditional function expression,
but is limited and can't be used in all situations. */