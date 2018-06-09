function titleCase(str) {
    var arr = [];
    str.split(' ').forEach(element => {
        arr.push(element.charAt(0).toUpperCase() + element.toLowerCase().slice(1));
    });;
    return arr.join(' ');
}
console.log(titleCase("I'm a little tea pot"));