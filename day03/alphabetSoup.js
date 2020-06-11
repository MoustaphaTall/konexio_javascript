function alphabetSoup(str) {
    str = str.split('');
    str = str.sort().join('');
    return str;
}

console.log(alphabetSoup("hooplah"));