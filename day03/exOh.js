function exOh(str) {
    str = str.split('');
    var countX = 0;
    var countO = 0;
    var countResult = null;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            countX++;
        } else if (str[i] === "o") {
            countO++;
        }
    }

    if (countX === countO) {
        return countResult = true;
    } else if (countX !== countO) {
        return countResult = false;
    } else {
        return "error";
    }
}

console.log(exOh("xoxoxooxoxo"));