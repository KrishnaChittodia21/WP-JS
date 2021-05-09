// call by value(primitives)
var a = 2;
var b;

b = 2;
// it means a and b will be pointing at different address with values copied

// call by reference(all objects(including functions))
var fun = { firstName: "Krishna", secondName: "Chittodia" };
var fun2;

fun2 = fun;
fun.firstName = "test";
console.log(fun);
console.log(fun2);

// call by reference even by parameters

function changeValue(val) {
  val.firstName = "hello";
}

changeValue(fun2);
console.log(fun);
console.log(fun2);

// equals puts new location in memory

fun = { firstName: "kannu" };
console.log(fun);
console.log(fun2)