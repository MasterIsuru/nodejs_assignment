const { getRandomWordSync } = require('word-maker');
const fizzBuzz = require('./fizzBuzz');

function answerTwo() {
    console.log('----------------- Question 2 -----------------');
    var i;
    for (i = 1; i < 101; i++) {
        console.log(`${i}: ${fizzBuzz(i, getRandomWordSync())}`);
    }
    console.log('----------------------------------------------');
}

module.exports = { answerTwo };