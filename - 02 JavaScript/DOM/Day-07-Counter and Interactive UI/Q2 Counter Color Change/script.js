// Tumne:

// count > 0 → positive class 🟢
// count < 0 → negative class 🔴
// count === 0 → dono classes remove
// Reset → count 0 + classes remove

// sab sahi kar diya hai.


let count = 0;


let display = document.getElementById("count");
let plubtn = document.getElementById("plusbtn");
let minusbtn = document.getElementById("minusbtn");
let resetbtn = document.getElementById("resetbtn");


plubtn.addEventListener("click", function () {
    count++;
    display.textContent = count;


    if (count > 0) {

        display.classList.add("positive");
        display.classList.remove("negative");

    }




});





minusbtn.addEventListener("click", function () {
    count--;
    display.textContent = count;




    if (count < 0) {

        display.classList.add("negative");
        display.classList.remove("positive");

    }

    else if (count === 0) {
        display.classList.remove("positive");
        display.classList.remove("negative");
    }


});




resetbtn.addEventListener("click", function () {
    count = 0;
    display.textContent = count;


    display.classList.remove("positive");
    display.classList.remove("negative");
});



