// To output aisa hoga:
// Initially → [ •••••••• ] [Click Me]
// Click Me → [ mypassword ] [Click Me] 👀
// Dobara Click Me → [ •••••••• ] [Click Me] 🔒
// Har click par show/hide toggle hoga.


let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){

    if(inp.type === "password"){
        inp.type = "text";
    } else{
        inp.type = "password";
    }
    
})