function fearNotLetter(str: string) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var startIndex = alphabet.indexOf(str[0]);

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        const alphabetElement = alphabet[index + startIndex];
        if (alphabetElement !== element) {
            return alphabetElement;
        }
    }
}

console.log(
    fearNotLetter("stvwx")
);

