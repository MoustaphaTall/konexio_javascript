var arr = ['a', 'b', 'a', 'c', 'a', 'd'];
var arr2 = arr.filter(function (el) {
    return el !== 'a';
})

console.log(arr2);