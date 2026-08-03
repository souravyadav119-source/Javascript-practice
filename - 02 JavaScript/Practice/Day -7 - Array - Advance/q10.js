// merge two array without using concat

function merge(arr1, arr2) {

    let merged = [];

    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i])
    } 
   
    for(let j=0; j < arr2.length; j++){
        merged.push(arr2[j])
    }

    console.log(merged);
}

merge([1,2,3], [4,5,6]);