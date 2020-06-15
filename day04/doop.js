function doop(int1, operator, int2, forbiddenInt) {
    var result = null;
    int1 = parseInt(int1);
    int2 = parseInt(int2);

    if (forbiddenInt) {
        return "error";
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

    return result;
}

var myArgs = process.argv.slice(2);
console.log(doop(myArgs[0], myArgs[1], myArgs[2], myArgs[3]));