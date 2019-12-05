const { getRandomWord, getRandomWordSync } = require('word-maker');
const fizzBuzz = require('./fizzBuzz');

function answerFourSync() {
    console.log('--------- Question 4 - Sync   ----------------');
    var i;
    for (i = 1; i < 101; i++) {
        let word;
        try {
            word = fizzBuzz(i, getRandomWordSync({ withErrors: true }));
        }
        catch (err) {
            word = "It shouldn't break anything!";
        }
        finally {
            console.log(`${i}: ${word}`);
        }
    }
    console.log('----------------------------------------------');
}

async function answerFour() {
    var i;
    console.log('--------- Question 4 - async  ----------------');
    for (i = 1; i < 101; i++) {
        let word;
        try {
            word = fizzBuzz(i, await getRandomWord({ withErrors: true }));
        }
        catch (err) {
            word = "It shouldn't break anything!";
        }
        finally {
            console.log(`${i}: ${word}`);
        }
    }
    console.log('----------------------------------------------');
}

function answerFourPartTwo(params) {
    var i;
    var promises = [];
    for (i = 1; i < 101; i++) {
        promises.push(getRandomWord(params));
    }

    executeAllPromises(promises);
}

function executeAllPromises(promises) {
    // Wrap all Promises in a Promise that will always "resolve"
    var resolvingPromises = promises.map(promise => {
        return new Promise(resolve => {
            var payload = new Array(2);
            promise
                .then(result => {
                    payload[0] = result;
                })
                .catch(error => {
                    payload[1] = error;
                })
                .then(function () {
                    resolve(payload);
                });
        });
    });

    // Execute all wrapped Promises
    return Promise.all(resolvingPromises)
        .then(function (items) {
            console.log('--------- Question 4 - Part 2 ----------------');
            items.forEach(function (payload, i) {
                if (payload[1]) {
                    console.log(`${i + 1}: It shouldn't break anything!`);
                } else {
                    console.log(`${i + 1}: ${payload[0]}`);
                }
            });
            console.log('----------------------------------------------');
        });
}

module.exports = { answerFourSync, answerFour, answerFourPartTwo };