// Insere um novo valor no final da tabela linear
function insertLinearTable(array, value) {
    const tempArray = new Array(array.length + 1);

    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i];
    }
    tempArray[array.length] = value;

    return tempArray;
}

const scores = new Array(90, 70, 50, 80, 60, 85);

console.log(insertLinearTable(scores, 75)); // [90, 70, 50, 80,60, 85, 75]
