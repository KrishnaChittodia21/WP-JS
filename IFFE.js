const test = (function (name) {
  return "Hello " + name;
})("kannu");

(function(name) {
  console.log("Hello " + name);
}('kannu21'))

console.log(test);
