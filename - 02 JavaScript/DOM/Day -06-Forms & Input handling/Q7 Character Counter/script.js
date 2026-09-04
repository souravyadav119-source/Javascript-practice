let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inp = document.getElementById("inp");


inp.addEventListener("input", function(){
    p.textContent =  inp.value.length 
})