let css = document.getElementById("css");
let removebtn = document.getElementById("removebtn");

removebtn.addEventListener("click", function(){
  if(css){
    css.remove();
    css = null;
  }
})