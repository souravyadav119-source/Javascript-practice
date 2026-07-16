// Count digit greater than 5 

function CountDigit(num) {
    let count = 0;

    while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        if (digit > 5) {
            count++;
        }
    }
    console.log(count);
}

CountDigit(567893)