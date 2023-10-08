import { startGame, getRandomInt } from '../index.js';

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

export default () => startGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  () => {},
  () => getRandomInt(100),
  (question) => (isPrime(question) ? 'yes' : 'no'),
);
