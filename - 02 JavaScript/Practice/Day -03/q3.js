// Count zero

function countzero(num) {
    let count = 0;


    while (num !== 0) {
        let digit = num % 10;
        if(digit === 0){
            count++;
        }
      num = Math.floor(num / 10);
    }
    console.log(count);
}

countzero(10245000);

