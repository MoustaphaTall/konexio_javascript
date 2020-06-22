var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(function (el) {
    el = el.split('');
    var arr2Reverse = el.reverse().join('');
    return arr2Reverse;
})

console.log(arr2);