console.log("1", false == 1);
console.log("2", 1 < 2 < 3);
console.log("3", 3 < 2 < 1);
console.log("4", "3" == 3);
console.log("5", false == 0);
console.log("6", false == "a");
console.log("7", null == undefined);
console.log("8", null === undefined);
console.log("9", NaN == NaN);
console.log("10", NaN === NaN);
console.log("11", undefined == "");
console.log("12", undefined == 0);
console.log("13", null == 0);
console.log("14", null == "");
var a;
if (a) {
  console.log("a has something");
}

//* when + operator is used it will concatenate both the Number with string but in case of - it will convert string to number then perform subtraction

var t1 = "1";
var t2 = 2;
console.log(t2 + t1);

var t3 = "1";
var t4 = 2;
console.log(t4 - t3);

//* All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values.

var x = -1;
var y = 0;

if (x) {
  console.log("Inside X");
}

if (y) {
  console.log("Inside Y");
}
