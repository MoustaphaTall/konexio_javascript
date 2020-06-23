function longestWord(str) {
    var arr = str.split(/[\W]/g).sort(function (a, b) {
        return b.length - a.length;
    });
    return arr[0];
}

console.log(longestWord('I love dogs'));