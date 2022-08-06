function minimumValue(array) {
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[minIndex] > array[i]) {
            minIndex = i;
        }
    }
    return array[minIndex];
}

const scores = [50, 60, 70, 80, 45, 90];
console.log(minimumValue(scores)); // 45
