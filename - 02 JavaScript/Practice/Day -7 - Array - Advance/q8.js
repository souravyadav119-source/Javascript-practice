// find common elemnts betweeen two array 

function commonelement(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

commonelement([10,20,30,40], [20,50,1]);
commonelement([1,2,3,4], [3,4,5,6]);