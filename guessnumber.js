'use strict';
/*document.querySelector('.msg').textContent = 'Correct Answer!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value  = 4;*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function(msg) {
    document.querySelector('.msg').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        //document.querySelector('.msg').textContent = 'No answer!';
        displayMsg('No answer!');
    } else if (guess === number) {
       // document.querySelector('.msg').textContent = 'Correct Number!';
       displayMsg('Correct Number!');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').style.backgroundColor = 'green';
        score++;
        document.querySelector('.score').textContent = score;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== number) {
        if (score > 1) {
           // document.querySelector('.msg').textContent = guess > number ? 'Too high' : 'Too Low';
           displayMsg(guess > number ? 'Too high' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.msg').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.msg').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.msg').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < number) {
        if (score > 1) {
            document.querySelector('.msg').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
        document.querySelector('.msg').textContent = 'you lost the game';
        document.querySelector('.score').textContent = 0;
    }
}
}
);


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    highScore = 0;
    number = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.msg').textContent = 'Start guessing...';
    displayMsg('Start guessing...');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').textContent = highScore;

});