let h1 = document.querySelector("h1");
let form = document.getElementById("form");
let name = document.getElementById("name");
let msg = document.getElementById("msg");
let btn = document.getElementById("btn");

form.addEventListener("input", function(event){
    event.preventDefault();
    msg.textContent = name.value.toLowerCase();
});