function powerFuncRec(num, power) {
    if (power === 0) {
        return 1;
    } else if (power > 0) {
        return num * powerFuncRec(num, power - 1);
    } else {
        return 1 / num * powerFuncRec(num, power + 1);
    }
}

console.log(powerFuncRec(3, -3));