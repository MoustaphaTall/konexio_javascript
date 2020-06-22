var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (el) {
    return `${el.firstName} ${el.surname}`;
});

console.log(arr2);