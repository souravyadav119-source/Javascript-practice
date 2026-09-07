let count = 0;

let display = document.getElementById("count");
let step = document.getElementById("step");


let plusbtn = document.getElementById("plusbtn");
let minusbtn = document.getElementById("minusbtn");
let resetbtn = document.getElementById("resetbtn");

plusbtn.addEventListener("click", function () {
    count += Number(step.value);
    display.textContent = count;
})

minusbtn.addEventListener("click", function () {
    count -= Number(step.value);
    display.textContent = count;
})


resetbtn.addEventListener("click", function () {
    count = 0;
    display.textContent = count
})