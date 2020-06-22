var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (el) {
    var newObj = { fullName: `${el.firstName} ${el.surname}` };
    var arrAdd = Object.assign(el, newObj);
    return arrAdd;
})

console.log(arr2);