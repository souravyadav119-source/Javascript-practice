let h1 = document.querySelector("h1");

let input = document.getElementById("input");

let btn = document.getElementById("btn");

let form = document.getElementById("form");

let msg = document.getElementById("msg");


btn.addEventListener("click",function(event){
    event.preventDefault();

    input.value = "";
    msg.textContent = "";
})