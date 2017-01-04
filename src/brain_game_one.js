import readlineSync from 'readline-sync';

export default (countTrueTries = 3) => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number odd otherwise answer "no".');

  const name = readlineSync.question('May I have your name? ');

  const readAnswer = () => {
    switch (readlineSync.question('Your answer: ')) {
      case 'yes' : return 'yes';
      case 'no' : return 'no';
      default : console.log("Incorrect answer, write only 'yes' or 'no'");
        return readAnswer();
    }
  };

  const iter = (tries) => {
    if (tries === 0) {
      return `Congratulations, ${name}!`;
    }
    const num = Math.round(Math.random() * 100);
    const even = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readAnswer();
    if (answer !== even) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
    return iter(tries - 1);
  };
  console.log(iter(countTrueTries));
};
