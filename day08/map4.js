var arr = [1, 2, 3, 4];
var arr2 = arr.map(function isEven(num) {
    return num % 2 === 0;
});

console.log(arr2);