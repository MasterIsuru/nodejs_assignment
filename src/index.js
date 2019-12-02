const { answerOne } = require('./questionOne');
const { answerTwo } = require('./questionTwo');
const { answerThree } = require('./questionThree');
const { answerFourSync, answerFour } = require('./questionFour');

console.log('It works!');

// YOUR CODE HERE

answerOne();
answerTwo();
answerThree();
answerFourSync();
answerFour({ withErrors: true });

// BONUS - Part 2
answerFour({ withErrors: true, slow: true });
answerFour({ slow: true });
