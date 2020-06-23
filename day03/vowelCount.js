function vowelCount(str) {
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var count = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (vowels.indexOf(str.charAt(i).toLowerCase()) > -1) {
            count++;
        }
    }
    return count;

}

console.log(vowelCount("abcdef"));