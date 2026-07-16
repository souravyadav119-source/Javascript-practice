//  Sum of even digit

function sum(num){
    let evenno = 0;

while(num!==0){

    let digit = num % 10;
       if(digit % 2 == 0){
        evenno += digit}
        num = Math.floor( num / 10);
     }
     -console.log(evenno);
}

sum(12345);

