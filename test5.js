// const dd = undefined;

// delete dd.isApp;
// delete dd['pp'];

// const tt = (data) => {
//   const yy = {
//     isApp: data?.isApp,
//     isUpdated: data?.isUpdated
//   }
//   delete yy.isApp;
// };

// tt(dd);

// console.log(dd);
console.log(
  (![] + [])[+[]] +
    (![] + [])[+!+[]] +
    ([![]] + [][[]])[+!+[] + [+[]]] +
    (![] + [])[!+[] + !+[]]
);
//So we try adding [] to false. But due to a number of internal function calls
// (binary + Operator -> ToPrimitive -> [[DefaultValue]])
//we end up converting the right operand to a string:
// console.log((![] + []))
// console.log("4"==4);
// console.log(typeof null)
// console.log({} === null)
// console.log(typeof Number)
// console.log(null === undefined)
// console.log(typeof (![] + []));
// console.log([]+{});
const obj = new Object();
console.log(typeof Object);
