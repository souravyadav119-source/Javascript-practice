// Product of odd num 

function ProductODDNo(num) {
    let product = 1;


    while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
     
        if(digit % 2  !== 0){
         product*= digit;
     }
    }
    console.log(product);
}

ProductODDNo(12345)