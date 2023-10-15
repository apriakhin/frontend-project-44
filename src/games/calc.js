import { getRandomInt } from '../index.js';

const maxOperationIndex = 2;
const operations = ['+', '-', '*'];
let x;
let y;
let operationIndex;

const showInfo = () => console.log('What is the result of the expression?');

const onStartRound = () => {
  x = getRandomInt(20);
  y = getRandomInt(20);
  operationIndex = getRandomInt(maxOperationIndex);
};

const getQuestion = () => `${x} ${operations[operationIndex]} ${y}`;

const getCorrectAnswer = () => {
  switch (operationIndex) {
    case 0: return String(x + y);
    case 1: return String(x - y);
    case 2: return String(x * y);
    default: return null;
  }
};

export {
  showInfo,
  onStartRound,
  getQuestion,
  getCorrectAnswer,
};
