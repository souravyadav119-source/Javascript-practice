let h1 = document.querySelector("h1");
let name = document.getElementById("name");
let btn = document.getElementById("btn");
let form = document.getElementById("form");
let msg = document.getElementById("msg");

btn.addEventListener("click", function(){

msg.textContent = name.value.toUpperCase();
    
})