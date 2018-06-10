function isThisNumberWrong(num, arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (num % element !== 0) {
            return true;
        }
    }
    return false;
}

function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
    var smallestMultiple = 1;
    var loop = 1;
    var n;
    while (isThisNumberWrong(smallestMultiple, newArr)) {
        smallestMultiple = newArr[0] * loop * newArr[1];
        loop++;
    }
    return smallestMultiple;
}

console.log(smallestCommons([2, 10]));
