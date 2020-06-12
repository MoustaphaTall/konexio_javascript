function letterCount(str, search) {
    str = str.split('');
    count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === search) {
            count++;
        }
    }
    return count;
}

console.log(letterCount("hello apple pie", "p"));