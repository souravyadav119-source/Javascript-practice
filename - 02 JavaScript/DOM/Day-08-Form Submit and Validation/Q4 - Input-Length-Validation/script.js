let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emaiLInput = document.getElementById("email");
let msg = document.getElementById("msg");

form.addEventListener("submit", function(event){

    event.preventDefault();

    nameInput.value.length;

    if(nameInput.value.length < 5){
        msg.textContent = "Enter valid name"
    } else{
        msg.textContent = "Everything is correct"
    }
})