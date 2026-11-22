let numbers = [1,2,3,5,6,7,8];

let missing;

for(let i = 1; i <= 8; i++){
    let found = false;

    for(let j = 0; j <= numbers.length; j++){
        if(numbers[j] === i){
            found = true;
            break;
        }
    }
    
    if(found === false){
        missing = i;
        break;
    }
}

console.log(missing);
