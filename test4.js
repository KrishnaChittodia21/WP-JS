console.log('2'-1); //1
console.log('2'*1); //2
console.log('2'/1); //2
console.log('2'%1); //0
console.log('2'+1); //21 only plus will combine string
console.log(1+2*3-1) // 6 because unary operator has more precedence
let a = (1+2, 3+4);
console.log(a); // 7 => 1+2 is calculated then thrown away then 3+4 is calculated
console.log("" + 1 + 0) // (1)
console.log("" - 1 + 0) // (2)
console.log(true + false)  // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // "9px"
console.log("$" + 4 + 5) // "$45"
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) // "  -9  5" // (3)
console.log("  -9  " - 5) // -14 // (4)
console.log(null + 1 )// 1 // (5)
console.log(undefined + 1) // NaN // (6)
console.log(" \t \n" - 2) // -2 // (7)

console.log( 0 == false ); // true
console.log( '' == false ); // true
//This happens because operands of different types are converted to numbers
//by the equality operator ==. An empty string, just like false, becomes a zero.

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

//Mathematically, that’s strange. The last result states that "null is greater than
//or equal to zero", so in one of the comparisons above it must be true,
//but they are both false.
//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true
//and (1) null > 0 is false.
//On the other hand, the equality check == for undefined and
//null is defined such that, without any conversions,
//they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

//Comparisons (1) and (2) return false because undefined gets converted to NaN
//and NaN is a special numeric value which returns false for all comparisons.
//The equality check (3) returns false because undefined only equals null,
//undefined, and no other value.
