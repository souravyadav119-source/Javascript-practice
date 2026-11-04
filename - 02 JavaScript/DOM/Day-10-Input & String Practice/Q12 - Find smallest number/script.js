let number = [45.12,67,5,89,23,10]

let smallest = number[0];

for(let i = 1; i < number.length; i++){
    if(number[i] < smallest){
        smallest = number[i];
    }
}

console.log(smallest);
