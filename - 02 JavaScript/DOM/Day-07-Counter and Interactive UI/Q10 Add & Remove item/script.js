let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");

addbtn.addEventListener("click", function () {
    let item = input.value;

        // Empty input check

    if(item ===""){
        return;
    }

        // Create list item


    let li = document.createElement("li");
    li.textContent = item;


        // Create Remove button

    let removebtn = document.createElement("button");
    removebtn.textContent = "Remove"

        // Add button to li

    li.appendChild(removebtn);

        // Add li to list
    list.appendChild(li);


        // Remove item


    removebtn.addEventListener("click", function () {
        li.remove();
    })


        // Clear input


    input.value = "";

 

})