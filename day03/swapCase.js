function swapCase(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (typeof str[i] === "number") {
            continue;
        } else if (str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        }
    }
    str = str.join('');
    return str;
}

var myArgs = process.argv.slice(2).join(' ');
console.log(swapCase(myArgs));