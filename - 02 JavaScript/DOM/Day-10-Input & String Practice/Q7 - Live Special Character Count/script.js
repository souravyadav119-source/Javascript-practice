let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function(){
    let count = 0;

    for(let character of input.value){
        if(/[^a-z0-9\s]/.test(character)){
            count++;
        }
    }


    msg.textContent = "Special Character: " + count;
})