//* They can be stopped midway and then continue from where it had stopped.

function* genFunc() {
  yield 3;
  yield 4;
}
let tt = genFunc();
console.log(tt.next());
console.log(tt.next());
console.log(tt.next());
