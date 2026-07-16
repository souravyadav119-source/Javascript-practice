// Sum of prime number

function Sumofprimenumber(num){
     let primeno = 0; 
  
    while(num!==0){
        let digit = num % 10;

        if(
            
            digit === 2||
            digit === 3||
            digit === 5||
            digit === 7 
        ) {
            primeno+= digit
        }
        num = Math.floor(num / 10);
    }
    console.log(primeno);
}

Sumofprimenumber(1235684)