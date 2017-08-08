'use strict';

var q1 = 'Is Ariel an only child?';
var a1 = prompt(q1);
console.log('Q: ' + q1);
console.log('A:' + a1);
if (a1.toLowerCase() === 'yes') {
  alert ('Sorry, Ariel has two siblings.');
}
else if (a1.toLowerCase() === 'no') {
  alert ('Correct! Ariel has two siblings.');
}
else {
  alert ('You didn\'t answer the question!');
}

var q2 = 'Does Ariel like knitting?';
var a2 = prompt(q2);
console.log('Q: ' + q2);
console.log('A:' + a2);
if (a2.toLowerCase() === 'yes') {
  alert ('You\'re right! Ariel is crazy about knitting.');
}
else if (a2.toLowerCase() === 'no') {
  alert ('You must not know her, knitting is Ariel\'s favorite hobby.');
}
else {
  alert ('It\'s a yes or no question!');
}

var q3 = 'Is Ariel\'s favorite music genre rap?';
var a3 = prompt(q3);
console.log('Q: ' + q3);
console.log('A:' + a3);
if (a3.toLowerCase() === 'yes') {
  alert ('No way! Ariel hates rap.');
}
else if (a3.toLowerCase() === 'no') {
  alert ('You\'re right, Ariel loves metal music.');
}
else {
  alert ('Just type \"yes\" or \"no\", it\'s not that hard!');
}
