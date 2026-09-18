let h1 = document.querySelector("h1");
let name = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let msg = document.getElementById("msg")


form.addEventListener("submit", function(event){
    event.preventDefault();

    if( name.value === ""){
        msg.textContent = ("Please Enter your name")
    }

    else if (email.value === ""){
        msg.textContent = "Please Enter your email";
    }

    else{
        msg.textContent = "Form submitted successfully";
    }


})
