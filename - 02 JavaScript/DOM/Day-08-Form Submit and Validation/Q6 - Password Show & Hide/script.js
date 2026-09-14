let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    if(input.type === "password"){
        input.type = "text";
    } else{
        input.type = "password";
    }
})