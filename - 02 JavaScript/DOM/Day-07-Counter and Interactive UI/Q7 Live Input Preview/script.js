let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let preview = document.getElementById("preview");

input.addEventListener("input", function () {
    
    preview.textContent = input.value;
    
})