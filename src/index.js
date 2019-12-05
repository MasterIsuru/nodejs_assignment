const { answerOne } = require('./questionOne');
const { answerTwo } = require('./questionTwo');
const { answerThree } = require('./questionThree');
const { answerFourSync, answerFour, answerFourPartTwo } = require('./questionFour');

console.log('It works!');

// YOUR CODE HERE

answerOne();
answerTwo();
answerThree();
answerFourSync();
answerFour();

// BONUS - Part 2
answerFourPartTwo({ withErrors: true, slow: true });
answerFourPartTwo({ slow: true });
