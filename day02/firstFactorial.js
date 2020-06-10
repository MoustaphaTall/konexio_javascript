var fact = 1;
function firstFactorial(num) {
    for (var i = num; i >= 1; i--) {
        fact *= i;
    }
    console.log(fact);
}

firstFactorial(8);