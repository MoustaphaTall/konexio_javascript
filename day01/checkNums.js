function checkNums(num1, num2) {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
        return 'num1 and num2 are not numbers'
    } else if (typeof num1 !== 'number') {
        return 'num1 is not a number'
    } else if (typeof num2 != 'number') {
        return 'num2 is not a number'
    } else if (num1 > num2) {
        return "num1 is greater than num2";
    } else if (num1 < num2) {
        return "num1 is lower than num2";
    } else {
        return "equal";
    }
}

console.log(checkNums(3, 122));
console.log(checkNums(55, 25));
console.log(checkNums(67, 67));
console.log(checkNums('f', 'b'));