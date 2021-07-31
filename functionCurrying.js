function multiply(a, b) {
  console.log(a * b);
}

var multiplyTwo = multiply.bind(this, 2); //* it means giving a default value 2 so whenever multiplyTwo is call we don't have to pass value of a
// multiplyTwo(4); //*here 4 is the value of b because we already set value of a

//* log will be 8

//* Definition :- creating a function from already created function and giving it some default values is called currying

//* Another example

var multiplyAgain = multiply.bind(this, 3, 3);
// multiplyAgain();

//* function currying can also be done with closures

var multiplyNew = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

var testIt = multiplyNew(4);
// testIt(3);

function sum1(a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    }
    return a;
  };
}

console.log("sum1", sum1(1)(2)(3)(4)());

function sum2(a) {
  return function (b) {
    if (b) {
      return sum2(a + b);
    }
    return a;
  };
}

let test = sum2(2)(3)(4)(5);
console.log("sum2", test());

function sum3(a, b) {
  return function (c, d) {
    if (c && d) {
      return sum3(a + b ,c + d)
    }
    return a + b;
  };
}

console.log("sum3", sum3(1, 2)(3, 4)(5, 6)());

function sum4(...args) {
  let a = args.reduce((acc, red) => acc+red, 0);
  return function(...args) {
    let b = args.reduce((acc, red) => acc+red, 0);
    if(b){
      return sum4(a+b);
    }
    return a;
  }
}

console.log("sum4", sum4(1,2)(3,4,5)(6,7,8,9,6)());
