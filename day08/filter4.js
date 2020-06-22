var arr = [1, 2, 3, 4];
var arr2 = arr.filter(function isEven(num) {
    return num % 2 === 0;
});

console.log(arr2);