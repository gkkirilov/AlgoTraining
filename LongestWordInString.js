function findLongestWordLength(str) {
    var biggest = 0;
    var words = str.split(' ');

    for (let index = 0; index < words.length; index++) {
        const wordLength = words[index].length;
        if (wordLength > biggest) {
            biggest = wordLength;
        }
    }
    return biggest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));