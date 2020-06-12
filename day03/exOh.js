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

var arr = []; for (var i = 0; i < 20; i += 2) { arr.push(i); }
console.log(arr);

var name = "Tony"; console.log('Hello' + name + ' , how are you ?')
var foo = 3.14; console.log(typeof foo);