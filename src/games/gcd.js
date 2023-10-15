import { getRandomInt } from '../index.js';

const maxNumber = 20;
let x;
let y;

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const showInfo = () => console.log('Find the greatest common divisor of given numbers.');

const onStartRound = () => {
  x = getRandomInt(maxNumber);
  y = getRandomInt(maxNumber);
};

const getQuestion = () => `${x} ${y}`;

const getCorrectAnswer = () => String(gcd(x, y));

export {
  showInfo,
  onStartRound,
  getQuestion,
  getCorrectAnswer,
};
