let items = document.querySelectorAll("li")
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

items.forEach(function(item){
    item.textContent = "Learning DOM"
})

})