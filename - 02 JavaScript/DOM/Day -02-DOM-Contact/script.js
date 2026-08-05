
// text content
// innerhtml
// addclasslist

let title = document.getElementById("title")
let button = document.getElementById("btn")
let para = document.getElementById("para")



button.addEventListener("click", function () {
    title.textContent = "Welcome Sourav";
    para.innerHTML = "<b>Learning DOM is Awesome</b>";
    para.classList.add("active")
})