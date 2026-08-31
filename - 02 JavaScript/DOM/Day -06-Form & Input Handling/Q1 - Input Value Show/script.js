let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    p.textContent = inp.value;
})