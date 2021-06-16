document.querySelector("#grandParent").addEventListener("click", () => {
  console.log("Grand Parent is clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent is clicked");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("child is clicked");
});

//? to stop event triggering use e.stopPropagation method

