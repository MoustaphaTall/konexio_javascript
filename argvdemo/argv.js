console.log(process.argv);
var myArgvs = process.argv.slice(2);
console.log(myArgvs);


console.log("concaténation", process.argv[2] + process.argv[2]);
console.log("addition", parseInt(process.argv[2]) + parseInt(process.argv[2]));