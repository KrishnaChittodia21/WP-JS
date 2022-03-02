
for (var i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

for (let i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

function foo(age) {
  if(age>18){
    var eligibility = 'Valid age';
  }
  console.log(eligibility);
}

function boo(age) {
  if(age>18){
    var eligibility = 'Valid age';
  }
  console.log(eligibility);
}

foo(19);
boo(19);

(function() {
  var objA = Object.create({
      foo: '1'
  })
  var objB = objA;
  objB.foo = '2';
  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
}())


var obj = {
  mm: 'Hello',
  oo: function(){
      (function(){
              console.log(this.mm)
          }())
  }
}

console.log(obj.oo());

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

let test = sum(1)(2)(3)(4);
console.log("sum:-", test());
// Output => sum:-10


console.log(3<2<1);
console.log(-3<-2<-1)
