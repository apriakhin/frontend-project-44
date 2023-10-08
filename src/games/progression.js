import { startGame, getRandomInt } from '../index.js';

const maxStartElement = 20;
const maxRandomStep = 4;
const maxRandomCount = 5;

const generateArithmeticSequence = (a, r, n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(a + (r * i));
  }
  return arr;
};

let elements;
let answerElement;

export default () => startGame(
  'What number is missing in the progression?',
  () => {
    const startElement = getRandomInt(maxStartElement);
    const step = 1 + getRandomInt(maxRandomStep);
    const count = 5 + getRandomInt(maxRandomCount);

    elements = generateArithmeticSequence(startElement, step, count);
    const answerIndex = getRandomInt(count - 1);

    answerElement = elements[answerIndex];
    elements[answerIndex] = '..';
  },
  () => elements.join(' '),
  () => String(answerElement),
);
