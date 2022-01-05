const fs = require('fs');

// const book = {
//     name: 'ramayana',
//     author: 'valmiki'
// }

// const jsonData = JSON.stringify(book);

// fs.writeFileSync("1-json.json", jsonData);
// console.log(jsonData.name);

// const parsedData = JSON.parse(jsonData);
// console.log(parsedData);

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString());


// Exercise
const dataBuffer = fs.readFileSync('1-json.json');
const jsonData = dataBuffer.toString();
const parsedData = JSON.parse(jsonData);
parsedData.name = 'mayur';
parsedData.age = 21;

const originalData = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json', originalData);

