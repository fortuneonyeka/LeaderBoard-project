export default 'Olympics';
const gameId = 'SJ6sb5XLeWomNhN0de2m';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const requestUrl = `${baseUrl}/games/${gameId}/scores`;


const requestHeader = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const getScores = () => fetch(requestUrl, {
  method: 'GET',
})
.then((response) => response.json())
.then((data) => data.result.sort(
  (score1, score2) => score2.score - score1.score,
));

export const submitScore = async (user, score) => fetch(requestUrl, {
  method: 'POST',
  body: JSON.stringify({user, score}),
  headers: requestHeader,
}).then((response) => response.json())