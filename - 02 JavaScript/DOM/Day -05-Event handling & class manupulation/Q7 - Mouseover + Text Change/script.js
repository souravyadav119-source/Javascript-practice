let h1 = document.querySelector("h1")
let btn = document.getElementById("btn")

btn.addEventListener("mouseover", function(){
    h1.textContent = "Mouse is over"
})

btn.addEventListener("mouseout", function(){
h1.textContent = "Welcome to JavaScript"
})