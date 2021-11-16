let boxItem = document.querySelectorAll(".box-item");
console.log(boxItem);

function addActive() {
  for (let i = 0; i < boxItem.length; i++) {
    boxItem[i].addEventListener("click", function () {
      boxItem[i].classList.add("active");
    });
    boxItem[i].classList.remove("active");
    boxItem[i].classList.remove("pre-active");
  }
}
