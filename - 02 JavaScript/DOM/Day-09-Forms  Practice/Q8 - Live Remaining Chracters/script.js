let h1 = document.getElementById("h1");
let input = document.getElementById("name");
let msg = document.getElementById("msg");

input.addEventListener("input", function(){
    msg.textContent = "Remaning:" +   (20 - input.value.length)
})