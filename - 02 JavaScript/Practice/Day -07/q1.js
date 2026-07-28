// 1. Find Frequency of Each Element   

function findfrequency(arr){
    let count = 0;

    for(let i= 1; i < arr.length; i++ )

        for(let j = 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }    
        console.log(arr[i] + " " + count);
}

findfrequency([1,2,2,3,2,4])