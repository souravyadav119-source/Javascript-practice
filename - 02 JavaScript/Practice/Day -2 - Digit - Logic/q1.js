// Count digit
// function countsum(num){
//     let count = 0;


//     while (num!==0){
//         num = Math.floor(num / 10);
//         count++;
//         console.log(count);
//     }
// }
// countsum(12345)


function countsum(num){
    let count = 0;

    for(;num!==0;){
    num = Math.floor(num / 10);
    count++;
    console.log(count);
    }
}

countsum(1234)