const note = require('./notes');

const validate = require('validator');
console.log(validate.isEmail('mayur@gmail.com'));
console.log(validate.isURL('mayur.com'));