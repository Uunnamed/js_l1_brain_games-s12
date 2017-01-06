// @flow
import game from './index';

const getNum = () => Math.round(Math.random() * 100);

const taskOfGame = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const fnGame = () => {
  if (fnGame.valueOf() === fnGame || fnGame.valueOf() === operations.length) {
    fnGame.valueOf = () => 0;
  }
  const numOperation = fnGame.valueOf();
  const num = getNum();
  const num2 = getNum();
  let trueAnswer = 0;
  let question = '';
  switch (operations[numOperation]) {
    case '+' : trueAnswer = num + num2;
      question = `${num} + ${num2}`;
      break;
    case '-' : trueAnswer = num - num2;
      question = `${num} - ${num2}`;
      break;
    case '*' : trueAnswer = num * num2;
      question = `${num} * ${num2}`;
      break;
    default: break;
  }
  fnGame.valueOf = () => numOperation + 1;
  return [question, trueAnswer];
};

const funcValidate = answer => (!isNaN(parseInt(answer, 10)) ? parseInt(answer, 10) : false);

const messageIncorAnswer = "Incorrect answer, use only 'numbers'";

const gameCalc = () => game(taskOfGame, fnGame, funcValidate, messageIncorAnswer);


export default gameCalc;
