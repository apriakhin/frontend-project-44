import {
  welcome,
  getName,
  hello,
  showInfo,
  showQuestion,
  getAnswer,
  showCorrect,
  showWrong,
  showCongratulations,
  tryAgain,
} from './cli.js';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const startGame = (info, onStartRound, getQuestion, getCorrectAnswer) => {
  welcome();
  const name = getName();
  hello(name);
  showInfo(info);

  let count = 3;
  while (count) {
    onStartRound();

    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
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
