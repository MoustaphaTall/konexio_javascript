var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}];

var arr2 = arr.filter(function (el) {
    return el.firstName.substring(0, 1) === 'D';
})

console.log(arr2);