let title = document.getElementById("title");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

title.addEventListener("mouseover", function(){
    title.style.color = "red"
})

title.addEventListener("mouseout", function(){
title.style.color = "green"
})

list.addEventListener("mouseover", function(){
    list.classList.add ("highlight")
})

list.addEventListener("mouseout", function(){
    list.classList.remove ("highlight")
})