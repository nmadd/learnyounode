var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var strArr = buff.toString().split('\n');
var result = strArr.length - 1;
console.log(result);