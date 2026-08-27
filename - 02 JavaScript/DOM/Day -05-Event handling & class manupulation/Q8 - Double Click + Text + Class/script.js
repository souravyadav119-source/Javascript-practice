let h1 = document.querySelector("h1");
let list = document.getElementById("list");
let btn = document.getElementById("btn");


btn.addEventListener("dblclick", function(){
    list.textContent = "Double Clicked"
    list.classList.add("active")
})