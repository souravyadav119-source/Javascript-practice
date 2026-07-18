// Harshad number 

function harshadno(num){
    let original = num;
    let sum = 0;



    while(num > 0){
         let digit = num % 10;
          num = Math.floor(num / 10);
         sum+= digit;
        }

        if(original % sum === 0 ){
            console.log('Harshad number');
        } else{

            console.log('Not Harshdad number');
            
        }
}

harshadno(19)
    