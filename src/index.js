import { Player, compAttack } from './gamefunc.js';
import { createGrid, createLog, addToLog, victory } from './interface.js';
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

setupGame()
createLog(container);

const playerGridSpace = document.querySelector('.player-board .grid-space');
const opponentGridSpace = document.querySelector('.opponent-board .grid-space');


function playerTurn(current, opponent) {
  current.renderGrid(playerGridSpace, 'show');
  opponent.renderGrid(opponentGridSpace);
}

function computerTurn(computer, playerOne) {
  playerOne.renderGrid(opponentGridSpace, true)
  computer.renderGrid(playerGridSpace);
  setTimeout(() => {compAttack(playerOne)}, 500)
}

// Turn Functions
function runHotSeatGame() {

  // Opponent names used for logging
  const playerOne = Player('You', 'Player 2', 'human');
  const playerTwo = Player('Them', 'Player 1', 'human');

  playerOne.setUpShips();
  playerTwo.setUpShips();

  let turn = 0;
  document.addEventListener('Turn Taken', () => {
    turn = (turn+1) % 2;
    if (playerOne.gameboard.checkForAllSunk()) {
      return victory(computerAI, playerOne);
    }
    if (playerTwo.gameboard.checkForAllSunk()) {
      return victory(playerOne, computerAI)
    }
    if (turn === 0) {
      playerTurn(playerOne, playerTwo);
    } else {
      playerTurn(playerTwo, playerOne);
    }
  })

  addToLog('Lets begin!')
  playerTurn(playerOne, playerTwo)
}

function runVsCompGame() {
    // Opponent name used for logging as the player is clicking on the opponent's board
    const playerOne = Player('Player 1', 'Computer');
    const computerAI = Player('Computer', 'Player 1');

    playerOne.setUpShips();
    computerAI.setUpShips();

    let turn = 0;
    document.addEventListener('Turn Taken', () => {
      turn = (turn+1) % 2;
      if (playerOne.gameboard.checkForAllSunk()) {
        return victory(computerAI, playerOne);
      }
      if (computerAI.gameboard.checkForAllSunk()) {
        return victory(playerOne, computerAI)
      }

      if (turn === 0) {
        playerTurn(playerOne, computerAI);
      } else {
        computerTurn(computerAI, playerOne);
      }
    })

  addToLog('Lets begin!')
  playerTurn(playerOne, computerAI)
}

// runHotSeatGame();
runVsCompGame();