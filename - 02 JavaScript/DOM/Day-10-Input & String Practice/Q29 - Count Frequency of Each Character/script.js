let str = 'javascript';

let frequncy = {};

for(let i = 0; i < str.length; i++){
    let char = str[i];

    if(frequncy[char]){
        frequncy[char]++;
    } else{
        frequncy[char]=1;
    }
}

console.log(frequncy);
