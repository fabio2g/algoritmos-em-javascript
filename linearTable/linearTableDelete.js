// Deleta um índice da mesa linear
function deleteLinearTable(array, index) {
    const tempArray = new Array(array.length - 1);

    for (let i = 0; i < array.length; i++) {
        if (i < index) {
            tempArray[i] = array[i];
        }
        if (i > index) {
            tempArray[i - 1] = array[i];
        }
    }
    return tempArray;
}

const scores = new Array(90, 70, 50, 80, 60, 85);
console.log(deleteLinearTable(scores, 2));
