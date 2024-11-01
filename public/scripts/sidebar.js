const dropdownButton = document.getElementById("sidebar__button");
const dropdownMenu = document.getElementById("sidebar__menu");

dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
})