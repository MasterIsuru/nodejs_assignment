const { getRandomWord } = require('word-maker');
const fizzBuzz = require('./fizzBuzz');

async function answerThree() {
    var i;
    console.log('----------------- Question 3 -----------------');
    for (i = 1; i < 101; i++) {
        let word = await getRandomWord();
        console.log(`${i}: ${word}`);
    }
    console.log('----------------------------------------------');
    for (i = 1; i < 101; i++) {
        let word = await getRandomWord();
        console.log(`${i}: ${fizzBuzz(i, word)}`);
    }
    console.log('----------------------------------------------');
}

module.exports = { answerThree };
