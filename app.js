'use strict';

var name = prompt('Hello! What is your name?');
alert ('Nice to meet you, ' + name + '. Today we\'re going to play a guessing game to get to know me - I\'m Ariel.');

var q1 = 'Is Ariel an only child?';
var a1 = prompt(q1);
console.log('Q: ' + q1);
console.log('A:' + a1);
if (a1.toLowerCase() === 'yes' || a1.toLowerCase() === 'y' ) {
  alert ('Sorry, ' + name + ', Ariel has two siblings.');
}
else if (a1.toLowerCase() === 'no' || a1.toLowerCase() === 'n') {
  alert ('Correct! Ariel has two siblings. Great work,' + name + '!');
}
else {
  alert (name + ', you didn\'t answer the question!');
}

var q2 = 'Does Ariel like knitting?';
var a2 = prompt(q2);
console.log('Q: ' + q2);
console.log('A:' + a2);
if (a2.toLowerCase() === 'yes' || a2.toLowerCase() === 'y') {
  alert ('You\'re right,' + name + '! Ariel is crazy about knitting.');
}
else if (a2.toLowerCase() === 'no' || a2.toLowerCase() === 'n') {
  alert ('You must not know her very well, knitting is Ariel\'s favorite hobby.');
}
else {
  alert ('Hey ' + name + ', it\'s a yes or no question!');
}

var q3 = 'Is Ariel\'s favorite music genre rap?';
var a3 = prompt(q3);
console.log('Q: ' + q3);
console.log('A:' + a3);
if (a3.toLowerCase() === 'yes' || a3.toLowerCase() === 'y') {
  alert ('No way! Ariel hates rap.');
}
else if (a3.toLowerCase() === 'no' || a3.toLowerCase() === 'n') {
  alert ('You\'re right, Ariel loves metal music.');
}
else {
  alert ('Just type \"yes\" or \"no\", it\'s not that hard!');
}

var q4 = 'Is Ariel Canadian?';
var a4 = prompt(q4);
console.log('Q: ' + q4);
console.log('A:' + a4);
if (a4.toLowerCase() === 'yes' || a4.toLowerCase() === 'y') {
  alert ('No, Ariel grew up in Seattle. But she\'ll take that as a compliment!');
}
else if (a4.toLowerCase() === 'no' || a4.toLowerCase() === 'n') {
  alert ('Correct. Ariel is from Seattle!');
}
else {
  alert ('Why do you insist on being difficult?');
}

var q5 = 'Does Ariel have pets?';
var a5 = prompt(q5);
console.log('Q: ' + q5);
console.log('A:' + a5);
if (a5.toLowerCase() === 'yes' || a5.toLowerCase() === 'y') {
  alert ('You\'re right, ' + name + ', Ariel has two cats.');
}
else if (a5.toLowerCase() === 'no' || a5.toLowerCase() === 'n') {
  alert ('Sorry, Ariel has two cats.');
}
else {
  alert ('I\'m starting to think you are not my friend, ' + name + '.');
}
