let dropdown__button = document.getElementsByClassName("dropdown__button");

for (let i = 0; i < dropdown__button.length; i++) {
  dropdown__button[i].addEventListener("click", function () {
    let dropdown = this.nextElementSibling;
    dropdown.classList.toggle("active");
  });
}
