let list = document.getElementById("list");
let btn = document.getElementById("btn");


btn.addEventListener("click", function(){

    let li = document.createElement("li");
     li.textContent = "React";
     list.appendChild(li);
    

})