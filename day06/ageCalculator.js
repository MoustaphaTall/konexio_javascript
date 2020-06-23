function ageCalculator(date) {
    if (typeof date === 'object') {
        return 'manually enter a date';
    }
    var dateMilli = new Date(date).getTime();
    var todayMilli = new Date().getTime();
    var todayAge = todayMilli / 31536000000;
    var age = todayAge - (dateMilli / 31536000000);
    return Math.trunc(age);
}

console.log(ageCalculator('October 02, 1996 11:20:00'));
console.log(ageCalculator('June 18, 2020 11:20:00'));