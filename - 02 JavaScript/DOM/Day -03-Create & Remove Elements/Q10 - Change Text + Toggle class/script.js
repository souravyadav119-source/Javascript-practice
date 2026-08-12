let tittle = document.getElementById("tittle");
let togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", function(){
    tittle.textContent = "Welcome Freshers";
    tittle.classList.toggle("active")
})