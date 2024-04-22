import { Player, compAttack } from './gamefunc.js';
import { interfaceDisplay } from './interface.js';
import './style.css';


const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Driver code

const display = interfaceDisplay(container);
display.homeDisplay();
const playerBoard = document.querySelector('.player-board');
const opponentBoard = document.querySelector('.opponent-board');
display.createGrid(playerBoard);
display.createGrid(opponentBoard);

const playerGridSpace = document.querySelector('.player-board .grid-space');
const opponentGridSpace = document.querySelector('.opponent-board .grid-space');


function playerTurn(current, opponent) {
  current.renderGrid(playerGridSpace, 'show');
  opponent.renderGrid(opponentGridSpace);
}

function computerTurn(computer, playerOne) {
  playerOne.renderGrid(playerGridSpace, 'show', true)
  computer.renderGrid(opponentGridSpace, true);
  setTimeout(() => {compAttack(playerOne)}, 500)
}

// Turn Functions
function runHotSeatGame(screen) {
  // Opponent names used for logging
  const playerOne = Player('Player 1', 'Player 2', screen);
  const playerTwo = Player('Player 2', 'Player 1', screen);

  playerOne.setUpShips();
  playerTwo.setUpShips();

  let turn = 0;
  document.addEventListener('Turn Taken', () => {
    turn = (turn+1) % 2;
    if (playerOne.gameboard.checkForAllSunk()) {
      return screen.victoryDisplay(playerTwo, playerOne);
    }
    if (playerTwo.gameboard.checkForAllSunk()) {
      return screen.victoryDisplay(playerOne, playerTwo)
    }
    if (turn === 0) {
      playerTurn(playerOne, playerTwo);
    } else {
      playerTurn(playerTwo, playerOne);
    }
    return true
  })

  playerTurn(playerOne, playerTwo)
}

function runVsCompGame(screen) {
    // Opponent name used for logging as the player is clicking on the opponent's board
    const playerOne = Player('Player 1', 'Computer', screen);
    const computerAI = Player('Computer', 'Player 1', screen);

    playerOne.setUpShips();
    computerAI.setUpShips();

    let turn = 0;
    document.addEventListener('Turn Taken', () => {
      turn = (turn+1) % 2;
      if (playerOne.gameboard.checkForAllSunk()) {
        return screen.victoryDisplay(computerAI, playerOne);
      }
      if (computerAI.gameboard.checkForAllSunk()) {
        return screen.victoryDisplay(playerOne, computerAI)
      }

      if (turn === 0) {
        playerTurn(playerOne, computerAI);
      } else {
        computerTurn(computerAI, playerOne);
      }
      return true
    })

  playerTurn(playerOne, computerAI)
}

document.addEventListener('New Game', (event) => {
  const gametype = event.detail;

  display.gameDisplay(display);
  if (gametype === 'hotseat') {
    runHotSeatGame(display);
  } else {
    runVsCompGame(display);
  }
})