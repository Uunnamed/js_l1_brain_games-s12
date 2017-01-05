// @flow
import readlineSync from 'readline-sync';

const print = str => console.log(str);

const getAnswer = (fnValidateAnsw, msgIncorAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  const validateAnswer = fnValidateAnsw(answer);
  if (validateAnswer === false) {
    print(msgIncorAnswer);
    return getAnswer(fnValidateAnsw, msgIncorAnswer);
  }
  return validateAnswer;
};

const getName = () => readlineSync.question('May I have your name? ');

const game = (taskOfGame, fnGame, fnValidateAnsw, msgIncorAnswer, tries = 3) => {
  print(`Welcome to the Brain Games!\n${taskOfGame}`);
  const name = getName();
  const iter = (tr) => {
    if (tr === 0) {
      return print(`Congratulations, ${name}!`);
    }
    const [question, trueAnswer] = fnGame();
    print(`Question: ${question}`);
    const answer = getAnswer(fnValidateAnsw, msgIncorAnswer);
    if (answer !== trueAnswer) {
      return print(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
    }
    print('Correct!');
    return iter(tr - 1);
  };
  return iter(tries);
};


export default game;
