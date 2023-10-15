import { getRandomInt } from '../index.js';

const maxNumber = 100;
let x;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const showInfo = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const onStartRound = () => {
  x = getRandomInt(maxNumber);
};

const getQuestion = () => x;

const getCorrectAnswer = () => (isPrime(x) ? 'yes' : 'no');

export {
  showInfo,
  onStartRound,
  getQuestion,
  getCorrectAnswer,
};
