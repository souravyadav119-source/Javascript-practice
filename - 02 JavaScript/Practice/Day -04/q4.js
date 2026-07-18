// Strong number

function factorial(num) {
    let product = 1
    while (num > 0) {
        product = product * num
        num--;
    }
    return (product);
}

// console.log(factorial(5));

// strong number


function strongno(num) {
    let original = num
    let sum = 0;


    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        let fact = factorial(digit);
        sum += fact;
    }

    if (sum === original) {
        console.log("Strong number");
    } else {
        console.log("Not Strong number");
    }
}

strongno(6)
strongno(145);
strongno(123);
strongno(2);
