function mutation(arr) {
    for (let index = 0; index < arr[1].length; index++) {
        const element = arr[1][index];

        if (arr[0].toLowerCase().indexOf(element) === -1) {
            return false;
        }
    }
    return true;
}
console.log(
    mutation(["hello", "hey"])
);