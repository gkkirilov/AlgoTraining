function getIndexToIns(arr, num) {
    arr.sort((a, b) => a > b);
    if (arr.length == 0) {
        return 0
    }
    for (let index = 0; index < arr.length; index++) {
        let currentElement = arr[index] == undefined ? -Infinity : arr[index];
        let nextElement = arr[index + 1] == undefined ? Infinity : arr[index + 1];
        if (currentElement == num) {
            return index;
        }
        if (currentElement < num && nextElement > num) {
            return index + 1;
        }
    }
}


console.log(getIndexToIns([], 1));