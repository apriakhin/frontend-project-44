import { getRandomInt } from '../index.js';

const maxNumber = 100;
let x;

const showInfo = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const onStartRound = () => {
  x = getRandomInt(maxNumber);
};

const getQuestion = () => x;

const getCorrectAnswer = () => (x % 2 === 0 ? 'yes' : 'no');

export {
  showInfo,
  onStartRound,
  getQuestion,
  getCorrectAnswer,
};
