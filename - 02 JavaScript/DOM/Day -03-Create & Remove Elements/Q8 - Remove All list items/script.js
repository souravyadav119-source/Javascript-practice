
let list = document.getElementById("list");
let removebtn = document.getElementById("removebtn");

removebtn.addEventListener("click", function(){
    while(list.firstElementChild){
        list.firstElementChild.remove();
    }
})