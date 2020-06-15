function tableMult(num) {
    if (num === undefined) {
        console.log("error");
    } else if (num < 0) {
        console.log("use only positive numbers!");
    } else {
        for (var i = 1, multipliers = 10; i <= multipliers; i++) {
            console.log(`${i} * ${num} = ${i * num}`);
        }
    }
}

var myArgs = process.argv[2];
tableMult(myArgs);