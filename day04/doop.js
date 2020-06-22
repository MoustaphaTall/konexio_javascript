function doop(int1, operator, int2) {
    var result = null;

    if (int1 === undefined || int2 === undefined) {
        return "error";
    }

    int1 = parseInt(int1);
    int2 = parseInt(int2);

    if (operator === "/" && int2 === 0) {
        return "error, division by 0";
    }

    switch (operator) {
        case '+':
            result = int1 + int2;
            break;
        case '-':
            result = int1 - int2;
            break;
        case '*':
            result = int1 * int2;
            break;
        case '/':
            result = int1 / int2;
            break;
        case '%':
            result = int1 % int2;
            break;
        // default:
        //     return "not in the pool of operators"; (si erreur dans les caract spéciaux)
    }

    if (result === null) {
        return "error";
    }

    return result;
}

var myArgs = process.argv.slice(2);
console.log(doop(myArgs[0], myArgs[1], myArgs[2], myArgs[3]));