function letterCapitalizeRegex(str) {
    str = str.replace(/\b[a-z]/gi, function toUp(exp) { return exp.toUpperCase() });
    return str;
}
console.log(letterCapitalizeRegex("hello world and coders"));