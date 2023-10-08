import { startGame, getRandomInt } from '../index.js';

const maxNumber = 100;

export default () => startGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  () => {},
  () => getRandomInt(maxNumber),
  (question) => (question % 2 === 0 ? 'yes' : 'no'),
);
