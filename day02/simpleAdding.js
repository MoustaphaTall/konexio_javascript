function simpleAdding(num) {
    var add = 0;
    for (var i = 1; i <= num; i++) {
        add += i;
    }
    return add;
}

console.log(simpleAdding(4));