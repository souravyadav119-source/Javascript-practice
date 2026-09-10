let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let preview = document.getElementById("preview");
let count = document.getElementById("count");

input.addEventListener("input", function(){
preview.textContent = "You typed"; + input.value;
count.textContent = "Chracters: "+ input.value.length;
})