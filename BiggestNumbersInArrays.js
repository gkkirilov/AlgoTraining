function largestOfFour(arr) {
    var result = [];

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        let biggest = 0;
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if (element > biggest) {
                biggest = element;
            }
        }
        result.push(biggest);
    }
    return result;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));