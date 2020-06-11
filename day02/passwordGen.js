function passwordGen(num) {
    if (num >= 6 && num <= 15) {
        var pool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var password = [];
        for (var i = 0; i < num; i++) {
            password.push(pool[Math.round(Math.random() * pool.length)]);
        }
        password = password.join('');
        return password;
    } else {
        return "erreur de taille";
    }
}

console.log(passwordGen(16));