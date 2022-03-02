var details = {
  firstName: 'Kannu',
  lastName: '21',
  printFullName: function (hostName, hostName2) {
    console.log(this.firstName + ' ' + this.lastName, hostName, hostName2);
  },
};

details.printFullName();

let details2 = {
  firstName: 'AO',
  lastName: 'OA',
};

details.printFullName.call(details2, 'hello', 'yellow');

var newB = details.printFullName.bind(details2);
newB();
newB('AA', 'BB');

let  sum = (x) => (y) =>  y ? sum(x+y): x;
const sum2 = function (x) {
  return function (y) {
    if(y) {
      return sum2(x+y);
    }
    return x;
  }
}
const sum3 = function (a, b) {
  return function (c,d) {
    if(c && d){
      return sum3(a+b, c+d);
    }
    return a+b;
  }
}

const sum4 = function (...args) {
  const a = args.reduce((acc, curr) => acc+curr, 0);
  return function(...args2) {
    const b = args2.reduce((acc, curr) =>  acc+curr, 0);
    if(b) {
      return sum4(a+b);
    }
    return a;
  }
}

console.log(sum(1)(2)(3)(4)());
console.log(sum2(1)(2)(3)(4)(5)());
console.log(sum3(1,2)(3,4)());
console.log(sum4(1,2)(3,4,5)(6,7,8,9)());
