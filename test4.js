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