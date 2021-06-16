document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent is clicked");
  },
  true //* Adding true means changing the hierarchy from bottom up to top down resulting in event trickling
  //* it also means useCapture flag and callback depends on it whether to be call now or later
  //* by default it is false which means event bubbling
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent is clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  true
);

//? to stop event triggering use e.stopPropagation method
