// Todo List  Output

// [ Learn JavaScript ] [Add Todo]

// • Learn JavaScript [Remove]
// • Practice DOM    [Remove]







let list = document.getElementById("list");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    // Todo ka text liya

    let todo = inp.value;

    // Empty input check 
    if(todo === ""){
        return;
    }

    // new li banaya 

    let li = document.createElement("li");

    // li me todo text diya 

    li.textContent = todo;


    // New Remove btn 

    let remove = document.createElement("button");

    // remove btn text seat  
    remove.textContent = "Remove"

    // li add

    li.appendChild(remove);

    //  li remove btn click

    remove.addEventListener("click", function(){
        // li remove hoga 
        li.remove();
    })

    // li ko list me add kiya
    list.appendChild(li);

    // Input clear

    inp.value = "";

    


})