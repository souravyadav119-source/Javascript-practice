// Intersection of two array(without duplicate)


function intersection(arr1, arr2) {
    let visited = [];

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                if (!visited.includes(arr1[i])) {


                    visited.push(arr1[i]);
                    console.log(arr1[i]);

                }
            }
        }
    }
}


intersection([1, 2, 2, 3, 4], [2, 2, 4, 5]);
intersection([5, 6, 7, 8, 9, 9, 0], [6, 7, 8, 9, 0])
