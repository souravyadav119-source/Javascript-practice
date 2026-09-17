let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function(){
    if(input.value.length > 20){
        msg.textContent = "Too many characters"
    } else{
        msg.textContent = "Valid"
    }
})