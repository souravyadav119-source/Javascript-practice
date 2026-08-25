let para = document.getElementById("para")
let box = document.getElementById("box");


para.addEventListener("mouseover", function(){
    para.style.backgroundColor = "red"
})


para.addEventListener("mouseout", function(){
para.style.backgroundColor = "yellow"
})


box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue";
})


box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "purple";
})