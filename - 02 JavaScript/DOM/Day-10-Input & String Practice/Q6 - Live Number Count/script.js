let h1 = document.querySelector("h1");
let msg = document.getElementById("msg");
let input = document.getElementById("input");

input.addEventListener("input", function(){
    let count = 0
    
    for (let character of input.value){
        if(/[0-9]/.test(character)){
            count++;
        }
    }
    msg.textContent = "Number: " + count;

});