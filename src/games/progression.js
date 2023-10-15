import { getRandomInt } from '../index.js';

const maxStartElement = 20;
const maxRandomStep = 4;
const maxRandomCount = 5;
let elements;
let answerElement;

const generateArithmeticSequence = (a, r, n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(a + (r * i));
  }
  return arr;
};

const showInfo = () => console.log('What number is missing in the progression?');

const onStartRound = () => {
  const startElement = getRandomInt(maxStartElement);
  const step = 1 + getRandomInt(maxRandomStep);
  const count = 5 + getRandomInt(maxRandomCount);

  elements = generateArithmeticSequence(startElement, step, count);
  const answerIndex = getRandomInt(count - 1);

  answerElement = elements[answerIndex];
  elements[answerIndex] = '..';
};

const getQuestion = () => elements.join(' ');

const getCorrectAnswer = () => String(answerElement);

export {
  showInfo,
  onStartRound,
  getQuestion,
  getCorrectAnswer,
};
