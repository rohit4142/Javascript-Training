'use strict';

/*document.querySelector('.message').textContent='Correct Number!';
console.log(document.querySelector('.message').textContent);*/
let secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(secret_number);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess_number) {
    displayMessage('No Number!!');
  }
  //when player wins
  else if (secret_number === guess_number) {
    document.querySelector('.number').textContent = secret_number;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //whena guess is too low
  /*else if(secret_number>guess_number)
{
    if(score>1)
    {
    document.querySelector('.message').textContent='Too Low!!';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You lost man!!';
        document.querySelector('.score').textContent=0;
    }
}*/
  /*when guess is too high
else if(secret_number<guess_number)
{
    if(score>1)
    {
    document.querySelector('.message').textContent='Too High!!';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You lost man!!';
        document.querySelector('.score').textContent=0;
    }
}*/
  //here we are reducing code size as there were a lot of repeating stuff
  //when guess is not equal to secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//implementing again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
