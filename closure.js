function doThing(input1) {
  return function (input2) {
    console.log(input1 + " " + input2);
  };
}

var callIt = doThing("Krishna");
callIt("Chittodia");

// inner function will have the reference of outer function memory even after it was removed from the execution stack

// function doThing2() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// var callIt2 = doThing2();
// callIt2[0]();
// callIt2[1]();
// callIt2[2]();

// function ad(x){
//   return function(y) {
//     return x+y;
//   }
// }
// var a1 = ad(5);
// var a2 = ad(10);

// console.log(a1(5));
// console.log(a2(10));