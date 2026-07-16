//  Smallest digit 

function digit(num) {
    let smallest = 9;

    while (num !== 0) {
        let digit = num % 10;
        if (digit < smallest) {
            smallest = digit
        }
        num = Math.floor(num / 10)
    }
    console.log(smallest);

}

digit(34567)