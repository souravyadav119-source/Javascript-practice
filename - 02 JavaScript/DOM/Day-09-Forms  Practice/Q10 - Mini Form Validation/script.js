let form = document.getElementById("form");
let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

form.addEventListener("input", function(){
  
    event.preventDefault()

    if(input.value === ""){
        msg.textContent = "Please enter your name";
    }

    else if(email.value === ""){
        msg.textContent = "Please enter your email";
    }

    else{
        msg.textContent = "Form submitted sucessfully";
    }
})