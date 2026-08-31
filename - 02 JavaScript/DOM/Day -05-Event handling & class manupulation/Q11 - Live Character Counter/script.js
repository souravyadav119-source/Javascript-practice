let h1 = document.querySelector("h1");
let inp = document.getElementById("inp");
let count = document.getElementById("count");

inp.addEventListener("input", function(){

    count.textContent = "Characters: " + inp.value.length;

})
