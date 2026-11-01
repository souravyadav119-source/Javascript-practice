let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function () {

    let length = input.value.length;

    if (length === 0) {
        msg.textContent = "Please enter password";

    } else if (length <= 5) {
        msg.textContent = "Weak Password";

    } else if (length <= 10) {
        msg.textContent = "Medium Password";

    } else {
        msg.textContent = "Strong Password";
    }

});