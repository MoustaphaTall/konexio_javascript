function letterCountRepeat(str) {
    var arr = str.split(' ');
    var counts = {};
    var count = null;
    var currentCharacter = null;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            currentCharacter = arr[i].charAt(j);
            count = counts[currentCharacter];
            if (count) {
                counts[currentCharacter] = count + 1;
            } else {
                counts[currentCharacter] = 1;
            }
        }

    }
    return counts;
    /* Il reste à retourner le mot qui a le plus de lettres répétées,
et à retourner -1 pour les mots dont counts[currentCharacter] > 1 === false; */
}


console.log(letterCountRepeat('hello world'));