//  count odd & even number
let evencount = 0;
let oddcount = 0;
 
let num = 123456

while(num!==0){

    let digit = num % 10;
    
    if(digit % 2 == 0 ){
        evencount++
    }
    
    else{
        oddcount++
    }
    num = Math.floor( num / 10);

}

console.log(evencount);
console.log(oddcount);

