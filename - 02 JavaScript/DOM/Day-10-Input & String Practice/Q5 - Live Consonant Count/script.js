let h1 = document.querySelector("h1");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

input.addEventListener("input", function(){
    let vowels = "aeiou";
    let count = 0;

for(let character of input.value.toLowerCase()){
    if( /[a-z]/.test(character) && !vowels.includes(character)){
        count++;
    }

    msg.textContent = "Consonants: " + count;
}
})