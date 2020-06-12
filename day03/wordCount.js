function wordCount(str) {
    str = str.split(' ');
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

console.log(wordCount("never eat shredded wheat or cake"));