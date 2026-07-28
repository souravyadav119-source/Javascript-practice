// 1. Find Frequency of Each Element   

function findfrequency(arr) {
    let visited = []

    for (let i = 0; i < arr.length; i++) {
        if (visited.includes(arr[i])) {
            continue;
        }


        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        visited.push(arr[i]);
        console.log(arr[i] + " = " + count);
    }
}

findfrequency([1, 2, 2, 3, 2, 4])