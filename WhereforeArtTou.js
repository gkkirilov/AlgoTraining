function checkCompatibility(arr1, arr2) {
    for (const key in arr2) {
        if (!arr1.hasOwnProperty(key) || arr1[key] != arr2[key]) {
            return false;
        }
    }

    return true;
}


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (checkCompatibility(element, source)) {
            arr.push(element);
        }
    }

    // Only change code above this line
    return arr;
}
console.log(
    whatIsInAName([{
        "apple": 1,
        "bat": 2
    }, {
        "bat": 2
    }, {
        "apple": 1,
        "bat": 2,
        "cookie": 2
    }], {
        "apple": 1,
        "bat": 2
    })
);