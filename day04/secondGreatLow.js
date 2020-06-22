// With sort
function secondGreatLow(arr) {
    var secondGreat = null;
    var secondLow = null;
    var sortedArr = arr.sort(function sorting(a, b) {
        return a - b;
    });

    for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            sortedArr.splice(i, 1);
            i--;
        }
    }

    secondLow = sortedArr[1];
    secondGreat = sortedArr[sortedArr.length - 2];
    return secondLow + ' ' + secondGreat;
}

console.log(secondGreatLow([1, 42, 42, 180]));