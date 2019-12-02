function fizzBuzz(value, randomWord) {
    let word = '';
    //detect value divisible by both 3 and 5
    if (value % 3 === 0 && value % 5 === 0) {
        word = 'FizzBuzz';
    }
    //detect value divisible by 3
    else if (value % 3 === 0) {
        word = 'Fizz';
    }
    //detect values divisible by 5
    else if (value % 5 === 0) {
        word = 'Buzz';
    }
    else {
        word = randomWord;
    }
    return word;
}

module.exports = fizzBuzz;