// First digit of number

function firstdigitofnumber(num){

    while(num >= 10){
        num = Math.floor(num / 10);
    }
    console.log(num);
}
firstdigitofnumber(89502)