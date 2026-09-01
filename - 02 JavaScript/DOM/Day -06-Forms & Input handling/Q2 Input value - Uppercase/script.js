let h1 = document.querySelector("h1");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    h1.textContent = inp.value.toUpperCase();
})

