// Count vowels

function countvowels(str){
    let count = 0;

    for(let i=0; i < str.length; i++ ){
        let chr = str[i];
        if(
            chr === "a"||
            chr === "e"||
            chr === "i"||
            chr === "o"||
            chr === "u"){
                count++;
            } 
        }
        return count
}

console.log(countvowels("javascript"));
console.log((countvowels("madam")));
console.log(countvowels("hello"));

