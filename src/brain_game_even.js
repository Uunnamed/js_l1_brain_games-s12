// @flow
import game from './index';

const getNum = () => Math.round(Math.random() * 100);

const taskOfGame = 'Answer "yes" if number odd otherwise answer "no".';

const fnGame = () => {
  const num = getNum();
  const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
  const question = num;
  return [question, trueAnswer];
};

const funcValidate = answer => (answer === 'yes' || answer === 'no' ? answer : false);

const messageIncorAnswer = "Incorrect answer, use only 'yes' or 'no'";

const gameEven = () => game(taskOfGame, fnGame, funcValidate, messageIncorAnswer);


export default gameEven;
