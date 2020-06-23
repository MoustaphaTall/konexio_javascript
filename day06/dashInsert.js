function dashInsert(str) {
    var arr = str.toString().split('');
    for (var i = arr.length - 1; i > 0; i--) {
        if (parseInt(arr[i]) % 2 !== 0 && parseInt(arr[i]) !== 0 && parseInt(arr[i - 1]) % 2 !== 0) {
            arr.splice(i, 0, '-');
        }
    }
    return arr.join('');
}

console.log(dashInsert('56730'));