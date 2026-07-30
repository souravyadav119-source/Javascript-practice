// missing number

function missingnumber(arr) {
    let missing = 0;
    let sum = 0;
    let expectedSum = 0;



    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let j = 1; j <= arr.length + 1; j++) {
        expectedSum += j;
    }
    missing = expectedSum - sum

    console.log(missing);

}
function missingnumber(arr) {
    let missing = 0;
    let sum = 0;
    let expectedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let j = 1; j <= arr.length + 1; j++) {
        expectedSum += j;
    }

    missing = expectedSum - sum;
    console.log(missing);
}


function missingnumber(arr) {
    let missing = 0;
    let sum = 0;
    let expectedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let j = 1; j <= arr.length + 1; j++) {
        expectedSum += j;
    }

    missing = expectedSum - sum;
    console.log(missing);
}


missingnumber([1,2,3,5]);      
missingnumber([2,3,4,5]);      
missingnumber([1,2,4,5]);      
missingnumber([1,3,4,5]);      
missingnumber([1,2,3,4,6]);    