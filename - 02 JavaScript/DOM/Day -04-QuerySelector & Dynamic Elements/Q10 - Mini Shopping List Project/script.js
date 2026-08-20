let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");

addbtn.addEventListener("click", function () {

    // input value lo 
    if (input.value.trim() === "") {
        return;
    }
    // New li create 
    let li = document.createElement("li");

    // input text li me likhna 

    li.textContent = input.value;

    //    remove button create
    let removebtn = document.createElement("button");
    removebtn.textContent = "remove"

    // ushi button pr click karenge 
    removebtn.addEventListener("click", function () {
        removebtn.parentElement.remove();
    })


    // remove button li 
    li.appendChild(removebtn)

    // list append

    list.appendChild(li);

    // Clear input
    input.value = "";




})