let list = document.getElementById("list");
let removebtn = document.getElementById("removebtn");

removebtn.addEventListener("click", function(){
   
// har click pr last eliment delete hoga 

    if(list.lastElementChild){
        list.lastElementChild.remove();
    }
});