function confirmEnding(str, target) {
    var check = str.substring(str.length - target.length, str.length);
    return check == target;
}

console.log(confirmEnding("Bastian", "n"));