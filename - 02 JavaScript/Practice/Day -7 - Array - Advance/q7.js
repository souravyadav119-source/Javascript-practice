// Find unique elemnt in an array 

function uniqueelement(arr) {

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++   
            }   
        }
        if (count === 1) {
            console.log(arr[i]);
        }
    }
}

uniqueelement([1, 2, 2, 3, 4, 4, 5]);