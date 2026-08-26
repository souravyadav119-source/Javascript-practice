

let h1 = document.querySelector("h1");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    h1.classList.toggle("highlight");
})