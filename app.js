'use strict';

var q1 = 'Is Ariel an only child?';
var a1 = prompt(q1);
console.log('Q: ' + q1);
console.log('A:' + a1);
var a1 = a1.toLowerCase();
if (a1 === 'yes') {
  alert ('Sorry, Ariel has two siblings.');
}
else {
  alert ('Correct! Ariel has two siblings.');
}

var q2 = 'Does Ariel like knitting?';
var a2 = prompt(q2);
console.log('Q: ' + q2);
console.log('A:' + a2);
var a2 = a2.toLowerCase();
if (a2 === 'yes') {
  alert ('You\'re right! Ariel is crazy about knitting.');
}
else {
  alert ('No, knitting is Ariel\'s favorite hobby.');
}
