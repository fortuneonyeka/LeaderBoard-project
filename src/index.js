import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import game, { getScores, submitScore } from './addScore.js';
import displayScores from './leaderbord.js';

const scoresList = document.getElementById('displayboard');
const refreshButton = document.getElementById('refresh');
const newScore = document.getElementById('new-score');
const newPlayer = document.getElementById('player-name');
const newPlayerScore = document.getElementById('player-score');

const loadScores = () => getScores().then((scores) => {
  const html = displayScores(scores);
  if (html) {
    scoresList.innerHTML = html;
  }
});

refreshButton.addEventListener('click', loadScores);

window.onload = () => {
  const title = document.getElementById('page-title');
  title.innerHTML += ` - ${game}`;
  loadScores();
};

newScore.addEventListener('submit', (event) => {
  event.preventDefault();
  const player = newPlayer.value;
  const score = newPlayerScore.value;
  const scoreError = document.querySelector('.error-msg');

  if (player && score && !Number.isNaN(score)) {
    scoreError.classList.remove('hidden');
    submitScore(player, parseInt(score, 10)).then(() => {
      newPlayerScore.value = '';
      newPlayer.value = '';
    });
  } else {
    newPlayerScore.value = '';
    newPlayer.value = '';
    scoreError.classList.remove('hidden');
  }
});
