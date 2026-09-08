let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let count = document.getElementById("count");


input.addEventListener("input", function(){
count.textContent = input.value.length + " / 20";  
})
