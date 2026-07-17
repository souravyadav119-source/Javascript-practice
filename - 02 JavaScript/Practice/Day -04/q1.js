// Armstrong number 

function Armstrong(num){
    let original = num;
    let armstrong = 0;

    while(num!==0){
        let digit = num % 10;
        let cube = digit ** 3;
        armstrong = cube + armstrong;
        num = Math.floor(num / 10);
    }
        if(armstrong===original){
        console.log("Armstrong Number");
        } else{
            console.log("Not Armstrong Number");
        }
}

Armstrong(153);