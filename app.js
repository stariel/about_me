'use strict';

var q1 = 'Is Ariel an only child?';
var a1 = prompt(q1);
console.log('Q: ' + q1);
console.log('A:' + a1);
if (a1.toLowerCase() === 'yes') {
  alert ('Sorry, Ariel has two siblings.');
}
else {
  alert ('Correct! Ariel has two siblings.');
}

var q2 = 'Does Ariel like knitting?';
var a2 = prompt(q2);
console.log('Q: ' + q2);
console.log('A:' + a2);
if (a2.toLowerCase() === 'yes') {
  alert ('You\'re right! Ariel is crazy about knitting.');
}
else {
  alert ('You must not know her, knitting is Ariel\'s favorite hobby.');
}
