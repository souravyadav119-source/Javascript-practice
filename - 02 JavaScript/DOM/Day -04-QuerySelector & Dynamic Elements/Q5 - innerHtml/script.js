let box = document.getElementById("box");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    box.innerHTML = `
    <h2>JavaScript is Awesome</h2>
    <p>I am learning DOM.</p>
    `
})