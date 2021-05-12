var a = new Number(3);
var b = new String(2);

console.log(a);
console.log(b);

//* it will create primitive object with all the primitive functions

//*? we can also create our own function also

Number.prototype.isGreaterThanOurNumber =  function () {
  return this > 10;
}

String.prototype.isGreaterThenOurLength = function () {
  return this.length > 10;
}

console.log(a.isGreaterThanOurNumber());
console.log("Krishna".isGreaterThenOurLength());

