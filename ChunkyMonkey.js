function chunkArrayInGroups(arr, size) {
    var resultArr = [];
    for (let index = 0; index < arr.length;  index= index + size) {
        resultArr.push(arr.slice(index, index + size));
    }

    return resultArr;
}

console.log(
    chunkArrayInGroups(["a", "b", "c", "d"], 2)
);