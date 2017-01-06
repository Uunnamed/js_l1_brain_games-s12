// @flow
import game from './index';

const getNum = () => Math.round(Math.random() * 100);

const taskOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (n1, n2) => (n2 % n1 === 0 ? n1 : gcd(n2 % n1, n1));

const fnGame = () => {
  const num = getNum();
  const num2 = getNum();
  const trueAnswer = gcd(num, num2);
  const question = `${num}  ${num2}`;
  return [question, trueAnswer];
};

const funcValidate = (answer) => {
  const result = parseInt(answer, 10);
  return (!isNaN(result) ? result : false);
};

const messageIncorAnswer = "Incorrect answer, use only 'numbers'";

const gameGcd = () => game(taskOfGame, fnGame, funcValidate, messageIncorAnswer);


export default gameGcd;
