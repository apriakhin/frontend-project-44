import { startGame, getRandomInt } from '../index.js';

const maxNumber = 20;

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

let x;
let y;

export default () => startGame(
  'Find the greatest common divisor of given numbers.',
  () => {
    x = getRandomInt(maxNumber);
    y = getRandomInt(maxNumber);
  },
  () => `${x} ${y}`,
  () => String(gcd(x, y)),
);
