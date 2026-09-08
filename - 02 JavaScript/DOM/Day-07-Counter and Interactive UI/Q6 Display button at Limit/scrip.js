let input = document.getElementById("input");
let btn = document.getElementById("btn");

input.addEventListener("input", function(){
    
    if(input.value.length >=  10){
        btn.disabled = true
    }
    else{
        btn.disabled = false;
    }
    
})