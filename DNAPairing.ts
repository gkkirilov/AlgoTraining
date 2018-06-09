function pairElement(str: string) {
    var result = [];
    var pairs = {};
    pairs['A'] = 'T';
    pairs['T'] = 'A';
    pairs['C'] = 'G';
    pairs['G'] = 'C';

    for (const element of str) {
        result.push([element, pairs[element]]);
    }

    return result;
}

console.log(
    pairElement("GCG")
);
