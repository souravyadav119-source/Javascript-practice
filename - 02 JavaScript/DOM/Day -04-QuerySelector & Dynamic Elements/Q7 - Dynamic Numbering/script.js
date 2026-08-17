let list = document.getElementById("list");
let btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", function(){

count++;

let li = document.createElement("li");
li.textContent = "Item" + count;
list.appendChild(li);

});