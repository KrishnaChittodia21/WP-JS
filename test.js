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

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*1000);
    console.log("Hello Kannu21");
  }
}

// x();

let sum = function (a) {
    return function(b){
        if(b) {
            return sum(a+b)
        }
        return a;
    }
}

// let sum = a => b => b? sum(a+b): a;
console.log(sum(1)(2)(3)(4)())
