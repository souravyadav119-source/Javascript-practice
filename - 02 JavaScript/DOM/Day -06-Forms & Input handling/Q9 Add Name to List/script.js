let h1 = document.querySelector("h1");
let list = document.getElementById("list");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
 let name =  inp.value

 let li = document.createElement("li")
 li.textContent = name;
 list.appendChild(li);
})