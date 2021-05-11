function multiply(a,b) {
  console.log(a*b)
}

var multiplyTwo = multiply.bind(this, 2); //* it means giving a default value 2 so whenever multiplyTwo is call we don't have to pass value of a
multiplyTwo(4); //*here 4 is the value of b because we already set value of a

//* log will be 8

//* Definition :- creating a function from already created function and giving it some default values is called currying

//* Another example

var multiplyAgain = multiply.bind(this, 3, 3);
multiplyAgain();