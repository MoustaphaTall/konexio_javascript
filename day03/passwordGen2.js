function passwordGen2(num) {
    if (num >= 6 && num <= 15) {
        var password = [];
        for (var i = 0; i < num; i++) {
            var randomPool = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65); //randomMinMax formula
            password.push(randomPool);
        }
        password = password.join('');
        return password;
    } else {
        return "erreur de taille";
    }
}

console.log(passwordGen2(10));