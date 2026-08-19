let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function(){
// 1. Empty input check 
    if(input.value.trim() === ""){
        return;
    }

// 2. New li create

let li = document.createElement("li");

// 3. input k text li me dena hoga 

li.textContent = input.value;

// 4. List me  add karna 
list.appendChild(li);

// 5. input clear

input.value = ""; 


})