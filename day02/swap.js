//Avec un array
function swap(var1, var2) {
    var arr = [var1, var2];
    arr[0] = var2;
    arr[1] = var1;
    return arr;
}

console.log("méthode array", swap('A', 35));

//Avec une assignation
function swap(var1, var2) {
    var var3 = var2;
    var2 = var1;
    var1 = var3;
    var arr = [var1, var2];
}

console.log("méthode assignation", swap(25, 35));