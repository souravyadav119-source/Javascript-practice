// Spy number 

function spynumber(num){
    let product = 1 ;
    let sum = 0;

    while(num!==0){
        let digit = num % 10;
        num = Math.floor(num / 10);
        product*= digit
        sum+= digit
    }

    if(product === sum){
        console.log('Spy number');
    }else{
        console.log('Not Spy number');
    }
       
}

spynumber(123);
spynumber(1124);
spynumber(124);