const { cpuUsage } = require("process");

var arr = ['apple', 'croissant', 'pear'];
var arr2 = arr.map(function (el) {
    return `<li>${el}</li>`;
})

console.log(arr2);