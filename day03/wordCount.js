function wordCount(str) {
    arr = str.split(' ');
    var arrLength = arr.length;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arrLength--;
        }
    }
    return arrLength;
}

console.log(wordCount("hello world "));