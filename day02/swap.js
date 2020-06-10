function swap(var1, var2) {
    var arr = [var1, var2];
    arr[0] = var2;
    arr[1] = var1;
    return arr;
}

console.log(swap(55, 35));