function palindrome(str) {
    str = str.split('');
    var strNospace = [];
    var strReverse = [];

    for (var i = 0; i < str.length; i++) {
        var strCurrent = str[i];
        if (strCurrent === " ") {
            continue;
        } else {
            strNospace.push(strCurrent);
        }
    }

    for (var j = str.length; j > 0; j--) {
        var strReverseCurrent = str[j - 1];
        if (strReverseCurrent === " ") {
            continue;
        } else {
            strReverse.push(strReverseCurrent);
        }
    }

    strNospace = strNospace.join('');
    strReverse = strReverse.join('');
    console.log(strNospace, strReverse);
    return strNospace === strReverse;
}

console.log(palindrome("never odd or even"));