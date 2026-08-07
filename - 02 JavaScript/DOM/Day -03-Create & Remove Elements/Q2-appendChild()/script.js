// add appendchild()

let button = document.getElementById("btn");
let list = document.getElementById("list");


button.addEventListener("click", function () {

    // create a new <li>


    let newItem = document.createElement("li");

    // add text

    newItem.textContent = "JavaScript";

    // Append inside the list
    list.appendChild(newItem);
})