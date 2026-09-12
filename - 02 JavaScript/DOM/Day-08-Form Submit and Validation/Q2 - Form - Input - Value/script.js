let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");


let msg = document.getElementById("msg");


form.addEventListener("submit", function(){

    event.preventDefault();

    msg.textContent = "Name: " + nameInput.value + " | Email: " +emailInput.value;

})  