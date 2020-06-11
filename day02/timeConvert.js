function timeConvert(num) {
    var seconds = num / 60;
    var restSeconds = num % 60;
    var minutes = Math.floor(num / 60 % 60);
    var hours = Math.floor(num / 60 / 60);
    return hours + ":" + minutes + ":" + restSeconds;
}

console.log(timeConvert(3700));