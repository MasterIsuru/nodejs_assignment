const { getRandomWord } = require('word-maker');
const fizzBuzz = require('./fizzBuzz');

function answerThree() {
    var i;
    var promises = [];
    for (i = 1; i < 101; i++) {
        promises.push(getRandomWord());
    }

    Promise.all(promises)
        .then(words => {
            console.log('----------------- Question 3 -----------------');
            words.map((word, i) => {
                console.log(`${i + 1}: ${word}`);
            });
            console.log('----------------------------------------------');
            words.map((word, i) => {
                console.log(`${i + 1}: ${fizzBuzz(i + 1, word)}`);
            });
            console.log('----------------------------------------------');
        });
}

module.exports = { answerThree };
