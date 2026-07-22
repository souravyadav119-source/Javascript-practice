// Shortest word

function shortestword(str){
    let words = str.split(" ");
    let shortest = words[0]

 for(let i = 0 ; i < words.length; i++){
    
    if(words[i].length < shortest.length){
    
        shortest = words[i];
    }
}
return shortest;

}

console.log(shortestword("I love javascript programming"));
console.log(shortestword("I am sourav"));
console.log(shortestword("Hello brother"));

