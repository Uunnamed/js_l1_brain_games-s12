// @flow
import game from './index';

const getNum = () => {
  const iter = (acc) => {
    if (acc.length === 3) {
      return acc;
    }
    const newAcc = acc + Math.round(Math.random() * 10);
    return iter(newAcc);
  };
  return parseInt(iter(''), 10);
};

const taskOfGame = 'Balance the given number.';

const getBalance = (number) => {
  const arrNums = number.toString().split('').map(num => parseInt(num, 10)).sort();
  const iter = (nums) => {
    const lastId = nums.length - 1;
    const dif = nums[lastId] - nums[0];
    if (dif <= 1) {
      return nums;
    }
    const canGive = (dif % 2 === 0 ? dif / 2 : (dif - 1) / 2);
    const first = nums[0] + canGive;
    const last = nums[lastId] - canGive;
    const newNums = [first, ...nums.slice(1, lastId), last].sort();
    return iter(newNums);
  };
  return parseInt(iter(arrNums).join(''), 10);
};

const fnGame = () => {
  const num = getNum();
  const trueAnswer = getBalance(num);
  const question = `${num}`;
  return [question, trueAnswer];
};

const funcValidate = (answer) => {
  const result = parseInt(answer, 10);
  return (!isNaN(result) ? result : false);
};

const messageIncorAnswer = "Incorrect answer, use only 'numbers'";

const gameBalance = () => game(taskOfGame, fnGame, funcValidate, messageIncorAnswer);


export default gameBalance;
