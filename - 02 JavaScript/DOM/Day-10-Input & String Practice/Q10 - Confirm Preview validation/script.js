let form = document.getElementById("form");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmPassword");

let msg = document.getElementById("msg");

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(password.value === "" || confirmpassword.value === ""){
        msg.textContent = "Please fill both fields";
    } else if(password.value === confirmpassword.value){
        msg.textContent = "Password match sucessfully";
    } else{
        msg.textContent = "Password doesnot match! "
    }
})