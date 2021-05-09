function test() {
  return // jS engine will detect the character of enter and will assume that there is semicolon so it will return from there
  {
    firstName: "krishna"
  }
}

console.log(test())