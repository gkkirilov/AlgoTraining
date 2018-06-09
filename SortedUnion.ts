function uniteUnique(arr1, arr2, arr3 ) {
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    var result = {};
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        if (!(element in result)) {
            result[element] = 0;
        }
    }

    return result;
}



console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
