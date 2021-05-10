function doThing(input1) {
  return function (input2) {
    console.log(input1 + " " + input2);
  };
}

var callIt = doThing('Krishna');
callIt('Chittodia');

// inner function will have the reference of outer function memory even after it was removed from the execution stack
