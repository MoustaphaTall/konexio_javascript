function formatDateToday() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    return `${currentDay}/${currentMonth}/${currentYear}`;
}

console.log(formatDateToday());