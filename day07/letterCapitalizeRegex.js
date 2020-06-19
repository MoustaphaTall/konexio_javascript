function letterCapitalizeRegex(str) {
    str = str.replace(/\b[a-z]/gi, function toUp(exp) { return exp.toUpperCase() });
    // console.log(str.search(/\b[a-z]/gi));
    return str;
}
console.log(letterCapitalizeRegex("hello world and coders"));