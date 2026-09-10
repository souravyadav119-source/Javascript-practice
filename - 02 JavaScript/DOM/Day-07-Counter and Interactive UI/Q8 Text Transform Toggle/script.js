let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let btn = document.getElementById("btn")

btn.addEventListener("click", function () {

if(btn.textContent === "UPPERCASE"){
    input.value = input.value.toUpperCase();
    btn.textContent = "lowercase";
}

else{
    input.value = input.value.toLowerCase();
    btn.textContent = "UPPERCASE";
}
        

})