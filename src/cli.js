import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const getName = () => readlineSync.question('May I have your name?: ');
export const hello = (name) => console.log(`Hello, ${name}!`);
export const showInfo = (info) => console.log(info);
export const getAnswer = () => readlineSync.question('Your answer: ');
export const showQuestion = (question) => console.log(`Question: ${question}`);
export const showCorrect = () => console.log('Correct!');
export const showWrong = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
export const showCongratulations = (name) => console.log(`Congratulations, ${name}!`);
export const tryAgain = (name) => console.log(`Let's try again, ${name}!`);
