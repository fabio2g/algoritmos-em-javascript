function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let isSwap = false;

        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let flag = array[j];
                array[j] = array[j + 1];
                array[j + 1] = flag;
                isSwap = true;
            }
        }
        if (!isSwap) {
            break;
        }
    }
    return array;
}

const scores = [50, 60, 70, 80, 85, 90];
console.log(bubbleSort(scores)); // [ 50, 60, 70, 80, 85, 90 ]
