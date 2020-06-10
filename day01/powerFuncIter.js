var result = 1;
function powerFuncIter(num, power) {
    for (var i = 0; i < power; i++) {
        result *= num;
    }
    return result;
}

console.log(powerFuncIter(3, 3));