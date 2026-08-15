let list = document.querySelectorAll("li");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {


    list.forEach(function (list) {

        list.classList.add("active")
    })

})