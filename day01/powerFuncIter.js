function powerFuncIter(num, power) {
    var result = 1;
    if (power === undefined) {
        return 'enter a power';
    }

    for (var i = 0; i < power; i++) {
        result *= num;
    }
    return result;
}

console.log(powerFuncIter(10, 2));