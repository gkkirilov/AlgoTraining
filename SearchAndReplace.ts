function myReplace(str: string, before: string, after: string) {
    if (before[0].match(/[A-Z]/g)) {
        after = after[0].toUpperCase() + after.substr(1);
    }
    return str.replace(before, after);
}

console.log(
    myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);
