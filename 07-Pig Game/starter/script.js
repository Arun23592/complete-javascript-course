'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice0El = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');

let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dice0El.classList.add('hidden');
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//ROlling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    dice0El.classList.remove('hidden');
    dice0El.src = `dice-${dice}.png`;
    //3.Check for rolled 1
    if (dice !== 1) {
      //Add to current scorer
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //Switch to next player

      // document.getElementById(`current--${activePlayer}`).textContent =
      //   currentScore;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score
    scores[activePlayer] += currentScore;

    // console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players scores is >=100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      dice0El.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
