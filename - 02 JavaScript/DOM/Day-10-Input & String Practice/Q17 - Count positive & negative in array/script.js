        let numbers = [10, -5, 20, -8, 0, 15, -3, 7];

        let positive = 0;
        let negative = 0;
        let zero = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] > 0) {
                positive++;
            }
            else if (numbers[i] < 0) {
                negative++;
            }
            else {
                zero++;
            }

        }

        console.log("Positive Numbers:", positive);
        console.log("Negative Numbers:", negative);
        console.log("Zero:", zero);
