// add appendchild()

let appendbtn = document.getElementById("appendbtn");
let prependbtn = document.getElementById("prependbtn");
let list = document.getElementById("list");


appendbtn.addEventListener("click", function () {

    // create a new <li>


    let newItem = document.createElement("li");

    // add text

    newItem.textContent = "JavaScript";

    // Append inside the list
    list.appendChild(newItem);

})


prependbtn.addEventListener("click", function(){
 
    let newItem = document.createElement("li");
//  prepend text 

newItem.textContent = "JavaScript";

// prepend inside the list
list.prepend(newItem);
    

})