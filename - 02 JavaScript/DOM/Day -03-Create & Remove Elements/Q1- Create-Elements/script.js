//createElement

let  div = document.createElement("div");
let button = document.getElementById("btn")
let container = document.getElementById("container")
let heading = document.createElement("h2")
 
button.addEventListener("click", function(){
 heading.textContent = "I Love JavaScript"
 container.appendChild(heading)
})