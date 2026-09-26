let h1 = document.querySelector("h1");
let input = document.getElementById("name");
let btn = document.getElementById("btn")
let msg = document.getElementById("msg");

input.addEventListener("input", function () {

    if (input.value.trim() === "") {
        msg.textContent = "Words: 0";
    }

    else {
        msg.textContent = "Words:" + input.value.trim().split(/\s+/).length;
    }
})
