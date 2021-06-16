document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
});

document.querySelector("#name").addEventListener("keyup", (e) => {
  e.target.value = e.target.value.toUpperCase();
})

