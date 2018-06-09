function reverseString(str) {
    var newArr = [];
    var reverseStr = str.split('');
    for (let index = 0; index < reverseStr.length; index++) {
        const element = reverseStr[index];
        newArr.unshift(element);
    }

    return newArr.join('');
}

console.log(reverseString("hello"));