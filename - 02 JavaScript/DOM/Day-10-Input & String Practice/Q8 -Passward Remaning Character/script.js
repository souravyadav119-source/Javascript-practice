let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function () {

    let remaining = 20 - input.value.length;

    msg.textContent = remaining + " characters remaining";

});