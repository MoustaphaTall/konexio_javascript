function firstReverse(str) {
    var str2 = [];
    str = str.split("");
    for (var i = str.length; i > 0; i--) {
        str2.push(str[i - 1]);
    }
    str2 = str2.join(" ");
    return str2;
}

console.log(firstReverse("Hello World and Coders"));