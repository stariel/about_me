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

var q4 = 'Is Ariel Canadian?';
var a4 = prompt(q4);
console.log('Q: ' + q4);
console.log('A:' + a4);
if (a4.toLowerCase() === 'yes') {
  alert ('No, Ariel grew up in Seattle.');
}
else if (a4.toLowerCase() === 'no') {
  alert ('Correct. Ariel is from Seattle!');
}
else {
  alert ('Why do you insist on being difficult?');
}

var q5 = 'Does Ariel have pets?';
var a5 = prompt(q5);
console.log('Q: ' + q5);
console.log('A:' + a5);
if (a5.toLowerCase() === 'yes') {
  alert ('Right, Ariel has two cats.');
}
else if (a5.toLowerCase() === 'no') {
  alert ('Sorry, Ariel has two cats.');
}
else {
  alert ('I\'m starting to think you are not my friend?');
}
