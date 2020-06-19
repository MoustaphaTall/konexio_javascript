function letterCapitalize(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase();
    }
    str = arr.join(' ');
    return str;
}

console.log(letterCapitalize('this test was a surprise'));