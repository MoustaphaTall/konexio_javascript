function iter(x) {
    for (var i = 0; i < x; i++) {
        console.log("Hello");
    }
}

iter(5);

function rec(x) {
    if (x === 0) {
        return;
    } else {
        console.log("Hello");
        return (rec(x - 1));
    }
}

rec(3);