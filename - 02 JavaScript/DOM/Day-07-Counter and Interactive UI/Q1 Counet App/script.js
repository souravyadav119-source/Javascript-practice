let display = document.getElementById("count");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let resetBtn = document.getElementById("resetBtn");

plusBtn.addEventListener("click", function(){
    count++;
    display.textContent = count;
});


minusBtn.addEventListener("click", function(){
    count--;
    display.textContent = count;
});


resetBtn.addEventListener("click", function(){
    count = 0;
    display.textContent = count;
});