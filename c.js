// Doc File
const fs = require('fs');

fs.readFile('./1.txt', 'utf8', (err, data) => {
    if(err) return console.log('LOI: ' + err.message());
    return console.log("Du lieu: " + data);
})

console.log("OK");