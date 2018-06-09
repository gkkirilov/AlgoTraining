function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    // new Boolean() returns an object instead of a primitive
    return typeof bool == typeof Boolean(bool);
}

console.log(booWho(true));