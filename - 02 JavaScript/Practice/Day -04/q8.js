// Neon number 


function neonnumber(num) {
    let square = num * num;
    let sum = 0;

    while (square > 0) {
        let digit = square% 10;
        square = Math.floor(square / 10)
        sum += digit
    }
    if(sum === num){
        console.log("Neo number");
    } else{
        console.log("Not Neo number");
    }
}


neonnumber(9)