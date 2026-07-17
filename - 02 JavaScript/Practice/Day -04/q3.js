// remove firstdigit 

function reversenumber(num) {
    let revrse = 0;

    while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        revrse = revrse * 10 + digit
    }
    return revrse
}


// remove first digit 
function removerfirstdigit(num) {
    let reverse = reversenumber(num);
    reverse = Math.floor(reverse / 10);
    let answer = reversenumber(reverse);
    console.log(answer);
}

removerfirstdigit(54321098)