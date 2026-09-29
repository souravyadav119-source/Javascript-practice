let h1 = document.querySelector("h1");

let input = document.getElementById("input");

let msg = document.getElementById("msg");

input.addEventListener("input", function() {
    msg.textContent = input.value[input.value.length - 1];
});