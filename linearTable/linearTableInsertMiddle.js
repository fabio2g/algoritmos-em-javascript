function insertLinearTable(array, value, insertIndex) {
	const tempArray = new Array(array.length + 1);

	for(let i = 0; i < array.length; i++) {
		if(i < insertIndex) {
			tempArray[i] = array[i];
		} else {
			tempArray[i + 1] = array[i];
		}
	}

	tempArray[insertIndex] = value;
	return tempArray;
}

const scores = new Array(90, 70, 50, 80, 60, 85);
