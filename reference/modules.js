/*
// --without exporting people.js manually

const xyz = require('./people');
//console.log(xyz); //{}
//console.log(people); // people is not defined

//[ 'yoshi', 'mario', 'bob', 'luigi' ]

// --export 'hello'

const xyz = require('./people');
//console.log(xyz); // hello

// --export people only
console.log(people);
console.log(ages); // ages is not defined

// --export all items as an object

const {people, ages} = require('./people');
console.log(people, ages);
*/

const os = require('os');

console.log(os.platform(), os.homedir());
