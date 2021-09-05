/*const fs = require('fs');

fs.readFile('C:\Users\phunko\Documents\training\lesson 2\file.json', (err, data) => { 
  if (err) throw err; 
  console.log(data); 
});*/


const myJSON = '{ "flag": true, "myPromises": [ "sport", "learn" ], "element": { "name": "Molecule Man", "age": 29, "secretIdentity": "Dan Jukes", "powers": [ "Radiation resistance", "Turning tiny", "Radiation blast" ] }, "screenshot":null, "elementText": "text", "allElementsText": "text2 const", "counter": 25, "config": "Common", "const": "FiRst", "parameters": [ 1, 2, 3, 4, 5, 6, 7, 8 ], "description": "qwertyu" }';
const myObj = JSON.parse(myJSON);
console.log(myObj);
fl = myObj.flag;
my = myObj.myPromises;

function isArray(my) {
    return my.constructor === Array;
}
//console.log();