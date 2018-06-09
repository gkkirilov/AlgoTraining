function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    }
    var result ='';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

var a = repeatStringNumTimes("abc", 3);
console.log(a);
