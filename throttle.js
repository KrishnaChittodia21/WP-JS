let counter = 0;
const getBadData = () => {
  console.log("button is clicked", counter++);
};

const getData = function (fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      let context = this;
      args = arguments;
      fn.apply(context, arguments);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, delay)
    }
  };
};

const getBetterData = getData(getBadData, 5000);
