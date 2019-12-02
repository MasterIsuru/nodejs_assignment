const { getRandomWordSync } = require('word-maker');

function answerOne() {
    console.log('----------------- Question 1 -----------------');
    var i;
    for (i = 1; i < 101; i++) {
        console.log(`${i}: ${getRandomWordSync()}`);
    }
    console.log('----------------------------------------------');
}

module.exports = { answerOne };