let addbtn = document.getElementById("addbtn");
let removebtn = document.getElementById("removebtn");

let list = document.getElementById("list");

// new item add 

let newItem;

addbtn.addEventListener("click", function () {


 newItem = document.createElement("li");
    
    //  add text 
     
    newItem.textContent = "JavaScript"

    // append iotem in this item 
     
    list.appendChild(newItem)
})


removebtn.addEventListener("click", function(){

    if(newItem){
        newItem.remove()
        newItem = null
    }
})


     