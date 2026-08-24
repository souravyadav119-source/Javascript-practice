let message = document.getElementById("message")
let togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", function(){
    
    message.classList.toggle("hidden");
});