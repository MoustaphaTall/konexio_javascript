function letterChange(str) {
    var arr = str.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var changedArr = arr.map(function (letter) {
        if (letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122) {
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);
        }

        if (vowels.indexOf(letter) > -1) {
            letter = letter.toUpperCase();
        }

        return letter;
    });

    return changedArr.join('');
}

console.log(letterChange('fun times!'));