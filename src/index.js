import { Ship, Gameboard, Player} from './gamefunc.js';
import { createGrid } from './interface.js';
import './style.css';

// Driver code
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const playArea = document.createElement('div');
playArea.className = 'play-area';
const playerBoard = document.createElement('div');
playerBoard.className = 'player-board';
const opponentBoard = document.createElement('div');
opponentBoard.className = 'opponent-board';
playArea.appendChild(opponentBoard);
playArea.appendChild(playerBoard);
container.appendChild(playArea);

const playerOne = Player('player');
const playerTwo = Player('computer');

createGrid(opponentBoard);
createGrid(playerBoard);
const playerGridSpace = playerBoard.querySelector('.grid-space');
const opponentGridSpace = opponentBoard.querySelector('.grid-space');

let turn = 0;


const battleship1 = Ship(4);
const destroyer1 = Ship(3);
const carrier1 = Ship(5);
const submarine1 = Ship(3);
const patrolboat1 = Ship(2);

playerOne.gameboard.addShip(destroyer1, [[9,5], [9,6], [9,7]]);
playerOne.gameboard.addShip(carrier1, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
playerOne.gameboard.addShip(patrolboat1, [[1,8], [2,8]]);
playerOne.gameboard.addShip(submarine1, [[5,9], [5,8], [5,7]]);
playerOne.gameboard.addShip(battleship1, [[7,4], [6,4], [5,4], [4,4]]);

const battleship2 = Ship(4);
const destroyer2 = Ship(3);
const carrier2 = Ship(5);
const submarine2 = Ship(3);
const patrolboat2 = Ship(2);

playerTwo.gameboard.addShip(destroyer2, [[0,0], [0,1], [0,2]]);
playerTwo.gameboard.addShip(carrier2, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
playerTwo.gameboard.addShip(patrolboat2, [[5,1], [5,2]]);
playerTwo.gameboard.addShip(submarine2, [[7,0], [7,1], [7,2]]);
playerTwo.gameboard.addShip(battleship2, [[7,6], [6,6], [5,6], [4,6]]);

function playerOneTurn() {
  playerOne.renderGrid(playerGridSpace, 'player');
  playerTwo.renderGrid(opponentGridSpace, 'opponent')

  const turnOver = new Event('Turn Taken');
  document.dispatchEvent(turnOver);
} 

function playerTwoTurn() {
  playerTwo.renderGrid(playerGridSpace, 'player');
  playerOne.renderGrid(opponentGridSpace, 'opponent')

  const turnOver = new Event('Turn Taken');
  document.dispatchEvent(turnOver);
}

document.addEventListener('Turn Taken', () => {
  turn = (turn+1) % 2;
  if (turn === 0) {
    playerOneTurn();
  } else {
    playerTwoTurn();}
})

playerOneTurn()
