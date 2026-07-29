// Product of digit

function digit(num){
    let product = 1;

    while(num!==0){
    let digit = num % 10;
    num = Math.floor(num / 10)
    product = digit * product; 
    }
    console.log(product);
    
}

digit(1234)