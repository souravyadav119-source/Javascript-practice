let h1 = document.querySelector("h1");
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let btn = document.getElementById("btn");

form.addEventListener("input", function(){
    msg.textContent =  "Characters" + input.value.length;
})


btn.addEventListener("click",function(){
    msg.textContent = input.value = ""
})