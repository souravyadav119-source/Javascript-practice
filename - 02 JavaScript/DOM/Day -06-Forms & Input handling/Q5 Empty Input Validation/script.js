let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    if(inp.value === ""){
         p.textContent = "Please Enter Something";
    } else {
       p.textContent = inp.value;
        }
})