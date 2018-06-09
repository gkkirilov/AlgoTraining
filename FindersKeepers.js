function findElement(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (func(element)) {
            return element;
        }
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));