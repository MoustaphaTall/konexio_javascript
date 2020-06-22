var arr = [1, 'a', 2, 'b'];
var arr2 = arr.filter(function (el) {
    return typeof el === 'string';
})

console.log(arr2);