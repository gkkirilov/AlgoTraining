function bouncer(arr) {
    var result = arr.filter(element => Boolean(element))
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));