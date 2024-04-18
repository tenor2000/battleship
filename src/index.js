import { Ship, Player} from './gamefunc.js';
import { createGrid, createLog, addToLog } from './interface.js';
import './style.css';


const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Driver code
function setupGame() {
  const playArea = document.createElement('div');
  playArea.className = 'play-area';
  const playerBoard = document.createElement('div');
  playerBoard.className = 'player-board';
  const opponentBoard = document.createElement('div');
  opponentBoard.className = 'opponent-board';
  playArea.appendChild(opponentBoard);
  playArea.appendChild(playerBoard);
  container.appendChild(playArea);

  createGrid(opponentBoard);
  createGrid(playerBoard);
}

function setupPlayers(p1, p2) {
  // player set WIP
  const battleship1 = Ship('battleship', 4);
  const destroyer1 = Ship('destroyer', 3);
  const carrier1 = Ship('carrier', 5);
  const submarine1 = Ship('submarine', 3);
  const patrolboat1 = Ship('patrol boat', 2);

  p1.gameboard.addShip(destroyer1, [[9,5], [9,6], [9,7]]);
  p1.gameboard.addShip(carrier1, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
  p1.gameboard.addShip(patrolboat1, [[1,8], [2,8]]);
  p1.gameboard.addShip(submarine1, [[5,9], [5,8], [5,7]]);
  p1.gameboard.addShip(battleship1, [[7,4], [6,4], [5,4], [4,4]]);

  const battleship2 = Ship('battleship', 4);
  const destroyer2 = Ship('destroyer', 3);
  const carrier2 = Ship('carrier', 5);
  const submarine2 = Ship('submarine', 3);
  const patrolboat2 = Ship('patrol boat', 2);

  p2.gameboard.addShip(destroyer2, [[0,0], [0,1], [0,2]]);
  p2.gameboard.addShip(carrier2, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
  p2.gameboard.addShip(patrolboat2, [[5,1], [5,2]]);
  p2.gameboard.addShip(submarine2, [[7,0], [7,1], [7,2]]);
  p2.gameboard.addShip(battleship2, [[7,6], [6,6], [5,6], [4,6]]);
}

setupGame()
createLog(container);

const playerGridSpace = document.querySelector('.player-board .grid-space');
const opponentGridSpace = document.querySelector('.opponent-board .grid-space');

// Opponent name used for logs
const playerOne = Player('Player 2', 'human');
const playerTwo = Player('Player 1', 'comp');

setupPlayers(playerOne, playerTwo);

// Turn Functions
function playerOneTurn() {
  playerOne.renderGrid(playerGridSpace, 'player');
  playerTwo.renderGrid(opponentGridSpace, 'opponent');
} 

function playerTwoTurn() {
  playerOne.renderGrid(opponentGridSpace, 'opponent')
  playerTwo.renderGrid(playerGridSpace, 'player');
}

function runGame() {
  
  let turn = 0;
  document.addEventListener('Turn Taken', () => {
    turn = (turn+1) % 2;
    if (turn === 0) {
      playerOneTurn();
    } else {
      playerTwoTurn();}
  })

  addToLog('Lets begin!')
  playerOneTurn()
}


// runGame()