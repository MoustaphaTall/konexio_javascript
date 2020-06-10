function squareRoot(num) {
    for (var i = 0; i != num; i++) {
        if (i * i === num) {
            return i;
        } else if (Number.isInteger(num / i) === false) {
            return 0;
        }
    } //il reste à ajouter la condition 0 si i n'est pas entier 
}

console.log(squareRoot(25));