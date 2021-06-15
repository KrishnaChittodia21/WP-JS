let counter = 0;
const getData = () => {
  console.log("function invoked", counter++);
};

const betterFunction = function(fn, delay) {
  let timer;
  return function () {
    let context = this; //* it is done to make sure correct method is called with same arguments in the lexical scopes
    args = arguments; //* same as above
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const getDataBetter = betterFunction(getData, 300);
