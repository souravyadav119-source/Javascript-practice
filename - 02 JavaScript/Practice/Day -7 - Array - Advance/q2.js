// find duplicate elment


function duplicateelement(arr){
    let visited = []

    for(let i=0; i < arr.length; i++){
        if(visited.includes(arr[i])){
            continue
        }


        let duplicate = 0;
        
        for(let j=0; j < arr.length; j++){
          if(arr[i] === arr[j]){
            duplicate++;
          }           
        } 

       if(duplicate > 1){
        visited.push(arr[i]);  
        console.log(arr[i]);
       }

       
    }
}

duplicateelement([1,2,3,2,4,1]);