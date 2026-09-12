let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let msg = document.getElementById("msg");

form.addEventListener("submit", function(event){

    event.preventDefault();

    if(nameInput.value === ""    || emailInput.value === ""){
        msg.textContent = "Please fill all fields!"
    } else{
        msg.textContent = "Form submitted sucessfully";
    }


})