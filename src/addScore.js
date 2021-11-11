// import scores from './leaderbord'

export default 'Olympics';
const gameId = 'SJ6sb5XLeWomNhN0de2m';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const requestUrl = `${baseUrl}/games/${gameId}/scores`;

export const getScores = async () => {
  const request = await fetch(requestUrl);
  const response = await request.json();
  return response.result.sort((score1, score2) => score2.score - score1.score);
};

export const submitScore = async (user, score) => {
  const request = await fetch(requestUrl, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const response = await request.json();
  return response;
};
