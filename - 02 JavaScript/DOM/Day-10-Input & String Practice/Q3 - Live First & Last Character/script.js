let h1 = document.querySelector("h1");
let input = document.getElementById("name");
let msg = document.getElementById("msg");
let btn = document.getElementById("btn");

input.addEventListener("input", function () {
    msg.textContent = "First: " + input.value[0] +
        " | Last:" + input.value[input.value.length - 1];
})