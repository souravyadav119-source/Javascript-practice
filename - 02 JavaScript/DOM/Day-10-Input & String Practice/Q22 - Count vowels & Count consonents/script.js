let str = "javascript";
let vowels = 0;
let consonents = 0;

for(let i =0; i < str.length; i++){
    if ('aeiou'.includes(str[i])){
        vowels++;
    }
    else{
        consonents++;
    }
}

console.log("vowels" , vowels);
console.log("consonents", consonents);

