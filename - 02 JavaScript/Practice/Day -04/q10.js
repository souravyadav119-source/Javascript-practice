// Perfect square 

function perfectsqare(num){
    
    let root = Math.sqrt(num);



    if(Number.isInteger(root)){
        console.log("perfect square");
    }else{
        console.log("Not perfect square");
    }
}
perfectsqare(25);
perfectsqare(36);
perfectsqare(173);
perfectsqare(81);