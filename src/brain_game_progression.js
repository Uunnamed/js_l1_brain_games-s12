// @flow
import game from './index';

const getNum = () => Math.round(Math.random() * 9);

const getProgression = () => {
  const first = getNum();
  const progress = getNum() + 1;
  const iter = (acc) => {
    if (acc.length === 10) {
      return acc;
    }
    return iter([...acc, acc[acc.length - 1] + progress]);
  };
  return iter([first]);
};

const taskOfGame = 'What number is missing in this progression?';

const fnGame = () => {
  const progression = getProgression();
  const index = getNum();
  const trueAnswer = progression[index];
  progression[index] = '..';
  const question = `${progression.join(' ')}`;
  return [question, trueAnswer];
};

const funcValidate = (answer) => {
  const result = parseInt(answer, 10);
  return (!isNaN(result) ? result : false);
};

const messageIncorAnswer = "Incorrect answer, use only 'numbers'";

const gameProgression = () => game(taskOfGame, fnGame, funcValidate, messageIncorAnswer);


export default gameProgression;
