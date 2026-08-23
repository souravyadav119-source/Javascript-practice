const heading = document.querySelector("#heading");
const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function () {
    heading.textContent = "Welcome to DOM Day 05!";
});