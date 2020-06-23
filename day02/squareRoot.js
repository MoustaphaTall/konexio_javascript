function squareRoot(num) {
    for (var i = 0; i < num; i++) {
        if (i * i === num) {
            return i;
        }
    }

    return 0;
}

console.log(squareRoot(9));