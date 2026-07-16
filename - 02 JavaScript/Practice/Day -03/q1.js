// largest even digit

function largestevendigit(num) {
let largest = -1;

while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        if( digit % 2 ==0 && digit > largest){
            largest =  digit
        }
    }
    
            if(largest === -1){
                console.log("Not Even no");
            }
            else{
                console.log(largest);
                
            }

}

largestevendigit(156791518)