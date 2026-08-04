// change heading text
// change paragraph color
// background chnage
// hide and show paragraph
// font size toggle
// image toggle 
// button text toggle
// paragraph background toggle

let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");
let image = document.getElementById("image");


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



    if(heading.style.fontSize == "40px"){

        heading.style.fontSize = "20px"
    } else{
        heading.style.fontSize = "40px"
    }


     if(image.src.includes("image1.avif")){
        image.src = "image2.avif";
     }else{
        image.src = "image1.avif"
     }



    if(button.innerHTML == "Click me"){
     button.innerText = "Hide"
    } else{
        button.innerText = "Click me"
    }


    if(paragraph.style.backgroundcolor == "white"){
        paragraph.style.backgroundcolor = "yellow"
    } else{
        paragraph.style.backgroundcolor = "white"
    }

   
})

