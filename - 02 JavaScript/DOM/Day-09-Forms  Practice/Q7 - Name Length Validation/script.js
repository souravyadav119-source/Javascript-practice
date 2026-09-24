let h1 = document.querySelector("h1");
let form = document.getElementById("form");
let name = document.getElementById("name");
let msg = document.getElementById("msg");
let btn = document.getElementById("btn");

form.addEventListener("input", function(){

    if(name.value.length < 5 ){
        msg.textContent = "To short"
    }  else{
        msg.textContent = "valid"
    }
        
    })