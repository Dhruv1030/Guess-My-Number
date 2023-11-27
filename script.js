'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' Correct Answer!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let Secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

}



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number !';
        displayMessage('No Number !');
    } else if (guess === Secretnumber) {
        // document.querySelector('.message').textContent = ' Correct Answer!';
        displayMessage('CORRECT ANSWER!');
        // document.querySelector('.number').textContent = Secretnumber;
        displayMessage(Secretnumber);



        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== Secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > Secretnumber ? 'TOO HIGH!' : 'TOO LOW!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = ' YOU LOST!';
            displayMessage('YOU LOST!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // } else if (guess > Secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' TOO HIGH!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = ' YOU LOST!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < Secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' TOO LOW!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = ' YOU LOST!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    Secretnumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = ' START GUESSING...';
    displayMessage('START GUESSING...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


