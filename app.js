'use strict';

var q1 = 'Is Ariel an only child?';
var a1 = prompt(q1);
console.log('Q: ' + q1);
console.log('A:' + a1);
var a1l = a1.toLowerCase();
if (a1l === 'yes') {
  alert ('Sorry, Ariel has two siblings.');
}
else {
  alert ('Correct! Ariel has two siblings.');
}
