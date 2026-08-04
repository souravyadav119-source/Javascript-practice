// change heading text
// change paragraph color
// background chnage
// hide and show paragraph

let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");

button.addEventListener("click", function () {
    heading.innerText = "Hello Sourav"
    heading.style.color = "white"
    paragraph.style.color = "white"
    document.body.style.backgroundColor = "black"
   
    if(paragraph.style.display == "none"){
       
        paragraph.style.display = "block"
    
    } else {
       paragraph.style.display = "none";
    }
})

