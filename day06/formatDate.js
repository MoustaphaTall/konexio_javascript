function formatDate(date) {
    date = date.split('-');
    var newDate = `${date[2]}/${date[1]}/${date[0]}`
    return newDate;
}

console.log(formatDate('1970-01-01'));