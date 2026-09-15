let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function(){

    msg.textContent = "Password length" + input.value.length;
});