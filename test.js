function first() {
  var a = "hello";
  function second() {
    var b = "world";
    function third() {
      console.log(a, " ", b);
    }
    third();
  }
  second();
}

// first();
function foo(x) {
  console.log(x);
}
const arr = new Array(1);
arr.length = 2;
arr.push(2);
arr.push(0);
console.log(arr);
for (const num in arr) {
  // console.log("22222222", num);
  foo(num);
  // foo(arr[num]);
}
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
    console.log("Hello Kannu21");
  }
}

// x();

let sum = function (a) {
  console.log("a", a);
  return function (b) {
    console.log("b", b);
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

// let sum = a => b => b? sum(a+b): a;
// console.log(sum(1)(2)(3)(4)());

// foo();

var foo = function() {
  console.log("bar");
}

// bar();

function bar() {
  console.log("bar");
}

// var i = 0;
// for(i=0;i<10;i++){
//   setTimeout(function(){
//     console.log(i)
//   },100)
// }
// for(var j = 0;j<100000;j++){
//   console.log("helloo");
// }
// console.log("a");
// setTimeout(() => {
//   console.log("b");
// }, 0);
// console.log("c");
// setInterval(() => {
//   console.log("d");
// }, 100);

{
  var a = "hello";
}

// console.log(a)
