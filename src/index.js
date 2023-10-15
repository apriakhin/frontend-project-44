import {
  welcome,
  getName,
  hello,
  showQuestion,
  getAnswer,
  showCorrect,
  showWrong,
  showCongratulations,
  tryAgain,
} from './cli.js';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const startGame = (game) => {
  welcome();

  const name = getName();
  hello(name);

  game.showInfo();

  let count = 3;
  while (count) {
    game.onStartRound();

    const question = game.getQuestion();
    const correctAnswer = game.getCorrectAnswer();

    showQuestion(question);

    const answer = getAnswer();

    if (answer === correctAnswer) {
      showCorrect();
      count -= 1;
    } else {
      showWrong(answer, correctAnswer);
      break;
    }
  }

  if (count === 0) {
    showCongratulations(name);
  } else {
    tryAgain(name);
  }
};
