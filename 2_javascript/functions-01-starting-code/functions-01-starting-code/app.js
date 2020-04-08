const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOISE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS= 'PLAYER WINS';
const RESULT_COMPUTER_WINS= 'COMPUTER WINS';

let gameIsRunning = false


const getPlayerChoise = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
  if (selection !== ROCK &&
     selection !== PAPER &&
     selection !== SCISSORS){
    alert(`Invalid Choise! We chose ${ROCK} for you`);
    return;
  }
  return selection;
};

const getComputerChoise = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34){
    return ROCK;
  } else if (randomValue < 0.67){
    return PAPER;
  } else {
    return SCISSORS; 
  }
};


const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOISE) =>
  
  cChoice === pChoice ? RESULT_DRAW 
  : (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ? RESULT_PLAYER_WINS 
  : RESULT_COMPUTER_WINS;
  // if(cChoice === pChoice){
  //   return RESULT_DRAW;
  // } else if (
  //           (cChoice === ROCK && pChoice === PAPER) ||
  //           (cChoice === PAPER && pChoice === SCISSORS) ||
  //           (cChoice === SCISSORS && pChoice === ROCK) 
  //           ){
  //     return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS
  // }

startGameBtn.addEventListener('click',() => {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoise();
  const computerChoise = getComputerChoise();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoise, playerSelection);
  }else {
    winner = getWinner(computerChoise);
  }

  console.log(winner);
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOISE}, computer picked ${computerChoise}, therefore you`;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'had a draw';
  }
  alert(message);
  gameIsRunning = false;
  
});


const combine = (sumResult, operation, ...numbers) => {

  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0
  for (const num of numbers) {
    if(operation === 'ADD'){
      sum += validateNumber(num);  
    } else {
      sum -= validateNumber(num);
    }
  }
  sumResult(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers){
//     sum -=num;
//   }
//   resultHandler(sum, 'The result after subtracting all numbers is ');
// }

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result of adding all numbers is: '),'ADD',1,5,10,-3,6,10);
combine(showResult.bind(this, 'The result of adding all numbers is: '),'ADD',1,5,10,-3,6,10,25,88);
combine(showResult.bind(this, 'The result of subtracting all numbers is: '),'SUBTRACT',1,10,15,20);