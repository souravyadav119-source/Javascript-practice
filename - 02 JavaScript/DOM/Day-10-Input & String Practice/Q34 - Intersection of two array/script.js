let arr1 = [1,2,3,4,5,6];
let arr2 = [3,4,6,8,9,10];

let result = [];

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            let alreadyExist = false;

            let alreadyExists = false;

            for(let k = 0; k < result.length; k++){
                if(result[k] === arr1[i]){
                    alreadyExist = true;
                    break;
                }
            }

            if(alreadyExist === false){
                result.push(arr1[i]);
            }
        }
    }
}

console.log(result);
