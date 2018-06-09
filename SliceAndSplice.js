function frankenSplice(arr1, arr2, n) {
    var arr3 = [].concat(arr2);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        arr3.splice(n+i, 0, arr1[i]);
    }

    return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));