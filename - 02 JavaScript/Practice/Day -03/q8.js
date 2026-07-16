// Smallest even digit 

function SmallestEvennn(num) {
    let smallest = 10;


    while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        if (digit % 2 === 0 && digit < smallest)
            smallest = digit
    }
    if(smallest === 10){
        console.log("Not Smallest Even no");
    } else{
        console.log(smallest);
    }
}

SmallestEvennn(345678921)