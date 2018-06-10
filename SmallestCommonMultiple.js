function smallestCommons(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var multiple = max;

    for (let i = max; i >= min; i--) {
        if (multiple % i !== 0) {
            multiple += max;
            i = max;
        }
    }
    return multiple;
}

console.log(
    smallestCommons([1, 5])
);
