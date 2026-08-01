//Count even number

function countevennumber(arr){
    let counteven = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            counteven++;
        }
    }

    console.log(counteven);
    
}


countevennumber([1,2,3,4,5,6]);     
countevennumber([10,15,20,25,30]);   
countevennumber([1,3,5,7]);          
countevennumber([2,4,6,8]);          