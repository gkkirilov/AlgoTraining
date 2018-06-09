function sumFibs(num: number) {
    var sum = 2;

    for (let index = 1, prev = 1, current = 2, next = 0; index <= num; index++) {
        next = prev + current;
        if (next % 2 !== 0 && next <= num) {
            sum += next;
        }
        if (next > num) {
            break;
        }
        prev = current;
        current = next;
    }
    return sum;
}
console.log(
    sumFibs(75025)
);
