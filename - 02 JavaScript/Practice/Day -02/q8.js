// Sum of odd no 

function sum(num){
    let oddno = 0;

    while(num!==0){
        let digit = num % 10;
      if(digit % 2 !== 0){
        oddno += digit
    }
        num = Math.floor( num / 10);
    }
    console.log(oddno);
}

sum(12345);