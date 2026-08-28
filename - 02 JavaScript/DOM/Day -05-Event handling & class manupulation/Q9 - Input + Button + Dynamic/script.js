let h1 = document.querySelector("h1");
let inp = document.getElementById("inp");
let p = document.querySelector("p");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    if(inp.value === "") {
        p.textContent = "Please enter something"
    } else {
        p.textContent = inp.value;
    }

    inp.value = ""

});