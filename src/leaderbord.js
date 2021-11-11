/* eslint-disable import/prefer-default-export */
export default (scores) => scores.reduce((account, entry) => `${account}
<li>
  <span class="player-name">${entry.user}:</span>
  <span class="player-score">${entry.score}</span>
</li>`, '');