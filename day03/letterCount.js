function letterCount(str, search) {
    var count = 0;
    str = str.split(' ');
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'search') {
            search = str[i + 1];
            str.splice(i);
        }
    }

    str = str.join(' ').split('');

    for (i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === search) {
            count++;
        }
    }
    return count;
}

console.log(letterCount("I wish you a happy new year search i"));