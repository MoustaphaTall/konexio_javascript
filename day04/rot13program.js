function rot13(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {

        var strCurrentCode = str[i].charCodeAt(0);
        var strNewCode = strCurrentCode + 13;

        if (strCurrentCode >= 65 && strCurrentCode <= 90) { //uppercases
            if (strNewCode > 90) {
                str[i] = String.fromCharCode(strNewCode - 26);
            } else {
                str[i] = String.fromCharCode(strNewCode);
            }
        }

        if (strCurrentCode >= 97 && strCurrentCode <= 122) { //lowercases
            if (strNewCode > 122) {
                str[i] = String.fromCharCode(strNewCode - 26);
            } else {
                str[i] = String.fromCharCode(strNewCode);
            }
        }
    }
    str = str.join('');
    return str;
}

var myArgs = process.argv.slice(2).join(' ');
console.log(rot13(myArgs));