// Count frequency of given digit

function Countfrequency(num, targetnum){
 let count = 0;

 while(num!==0){
    let digit = num % 10;
    if(digit === targetnum){
       count++
    }
    num = Math.floor(num / 10);
 }
     console.log(count);

}


Countfrequency(5468345, 5);