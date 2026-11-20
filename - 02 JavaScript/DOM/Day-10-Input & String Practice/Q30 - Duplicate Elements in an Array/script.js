let number = [10,20,30,40,10,50,30];

let seen = {};
let duplicate = [];

for(let i = 0; i < number.length; i++){
    let num = number[i];

    if(seen[num]){
        if(!duplicate.includes(num)){
            duplicate.push(num);
        }
    } else{
        seen[num] = true;
    }
}

console.log(duplicate);
