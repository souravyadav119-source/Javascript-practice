
// text content
// innerhtml
// addclasslist

let title = document.getElementById("title");
let para = document.getElementById("para");
let addbtn = document.getElementById("addbtn");
let removebtn = document.getElementById("removebtn");
let togglebtn = document.getElementById("togglebtn");

addbtn.addEventListener("click", function () {
    title.textContent = "Welcome Sourav";
    para.innerHTML = "<b>Learning DOM is Awesome</b>";
    para.classList.add("active");
})

removebtn.addEventListener("click", function () {
    para.classList.remove("active");
});

togglebtn.addEventListener("click", function () {
    para.classList.toggle("active")
})
