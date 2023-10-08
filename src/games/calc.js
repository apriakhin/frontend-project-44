import { startGame, getRandomInt } from '../index.js';

const maxOperationIndex = 2;

const getCorrectAnswer = (x, y, operationIndex) => {
  switch (operationIndex) {
    case 0: return x + y;
    case 1: return x - y;
    case 2: return x * y;
    default: return null;
  }
};

const getOperationString = (operationIndex) => ['+', '-', '*'][operationIndex];
const getQuestion = (x, y, operationIndex) => `${x} ${getOperationString(operationIndex)} ${y}`;

let x;
let y;
let operationIndex;

export default () => startGame(
  'What is the result of the expression?',
  () => {
    x = getRandomInt(20);
    y = getRandomInt(20);
    operationIndex = getRandomInt(maxOperationIndex);
  },
  () => getQuestion(x, y, operationIndex),
  () => String(getCorrectAnswer(x, y, operationIndex)),
);
