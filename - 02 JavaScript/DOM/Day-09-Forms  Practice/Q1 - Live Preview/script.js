// name output 
// uppercase preview 

let h1 = document.querySelector("h1");
let name = document.getElementById("name");
let output = document.getElementById("output");
let form = document.getElementById("form");

form.addEventListener("input", function(){
output.textContent = name.value.toUpperCase();
})
