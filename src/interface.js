// Interface set up
export function interfaceDisplay(container) {
    const playArea = document.createElement('div');
    playArea.className = 'play-area';
    const playerBoard = document.createElement('div');
    playerBoard.className = 'player-board';
    const opponentBoard = document.createElement('div');
    opponentBoard.className = 'opponent-board';
    playArea.appendChild(opponentBoard);
    playArea.appendChild(playerBoard);
    container.appendChild(playArea);

    const adminArea = document.createElement('div');
    adminArea.className = 'admin-area';
    container.appendChild(adminArea);
    
    const topAdminBox = document.createElement('div');
    topAdminBox.className = 'top-admin-box';

    const bottomAdminBox = document.createElement('div');
    bottomAdminBox.className = 'bottom-admin-box';

    adminArea.appendChild(topAdminBox);
    adminArea.appendChild(bottomAdminBox);

    return {
        createGrid(boardspace) {
            const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            const xCoordSpace = document.createElement('div');
            xCoordSpace.className = 'coordinate-space';
        
            xCoordSpace.id = 'x-coord';
            const yCoordSpace = document.createElement('div');
            yCoordSpace.className = 'coordinate-space';
            yCoordSpace.id = 'y-coord';
        
            for (let i = 0; i < 10; i++) {
                const xCoord = document.createElement('div');
                xCoord.className = 'x-coord';
                xCoord.innerHTML = xLabels[i];
                xCoordSpace.appendChild(xCoord);
                const yCoord = document.createElement('div');
                yCoord.className = 'y-coord';
                yCoord.innerHTML = yLabels[i];
                yCoordSpace.appendChild(yCoord);
            }
            const zeroSpace = document.createElement('div');
            zeroSpace.className = 'zero-space';
            const gridSpace = document.createElement('div');
            gridSpace.className = 'grid-space';
        
            boardspace.appendChild(zeroSpace);
            boardspace.appendChild(xCoordSpace);
            boardspace.appendChild(yCoordSpace);
            boardspace.appendChild(gridSpace);
        
            for (let i = 0; i < 100; i++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                gridSpace.appendChild(cell);
            }
        },
        homeDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h1');
            title.textContent = 'Welcome to Battleship';

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';
   
            const newGameButton = document.createElement('button');
            newGameButton.className = 'control-buttons';
            newGameButton.textContent = 'New Game';
            
            newGameButton.addEventListener('click', () => {
                this.newGameOptDisplay()
            })

            const optButton = document.createElement('button');
            optButton.className = 'control-buttons';
            optButton.textContent = 'Options';

            optButton.addEventListener('click', () => {
                this.optionsDisplay()
            })
            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(newGameButton);
            buttonDiv.appendChild(optButton);
        },
        gameDisplay() {
            topAdminBox.innerHTML = '';
            this.addToLog('BEGIN GAME: Battleship!')

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';

            const concedeButton = document.createElement('button');
            concedeButton.className = 'control-buttons';
            concedeButton.textContent = 'Concede';

            bottomAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(concedeButton);
            concedeButton.addEventListener('click', () => {
                window.location.reload()
            })
        },
        setUpShipDisplay(shipArray) {
            // not been implemented yet
            topAdminBox.innerHTML = '';
            const title = document.createElement('h1');
            title.textContent = 'Set Up Your Ships!';
            topAdminBox.appendChild(title);

            bottomAdminBox.innerHTML = '';
            const title2 = document.createElement('h2');
            title2.textContent = 'Drag and Drop Your Ships!';

            const shipDiv = document.createElement('div');
            shipDiv.className = 'ship-container';

            shipArray.forEach(element => {
                const ship = document.createElement('div');
                ship.className = 'ship';
                ship.textContent = element.shipType;
                ship.appendChild(ship);
            });
        },
        newGameOptDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h2');
            title.textContent = 'New Game: Select Gametype';
            
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';

            const vscompButton = document.createElement('button');
            vscompButton.className = 'control-buttons';
            vscompButton.textContent = 'Human vs. Computer';
            vscompButton.addEventListener('click', () => {
                const gametype = 'vscomp';
                document.dispatchEvent(new CustomEvent('New Game', { detail: gametype}));
            })

            const hotseatButton = document.createElement('button');
            hotseatButton.className = 'control-buttons';
            hotseatButton.textContent = 'Hot Seat';
            hotseatButton.addEventListener('click', () => {
                const gametype = 'hotseat';
                document.dispatchEvent(new CustomEvent('New Game', { detail: gametype}));
            })

            const backButton = document.createElement('button');
            backButton.className = 'control-buttons';
            backButton.textContent = 'Back';
            backButton.addEventListener('click', () => {
                this.homeDisplay()
            })
            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(vscompButton);
            buttonDiv.appendChild(hotseatButton);
            buttonDiv.appendChild(backButton);
        },
        optionsDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h2');
            title.textContent = 'Options: Ship Placement';

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';
            
            const randButton = document.createElement('button');
            randButton.className = 'control-buttons';
            randButton.textContent = 'Randomly Assign';

            const customButton = document.createElement('button');
            customButton.className = 'control-buttons';
            customButton.textContent = 'Custom Placement';

            const backButton = document.createElement('button');
            backButton.className = 'control-buttons';
            backButton.textContent = 'Back';
            backButton.addEventListener('click', () => {
                this.homeDisplay()
            })

            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(randButton);
            buttonDiv.appendChild(customButton);
            buttonDiv.appendChild(backButton);
        },
        addToLog(text) {
            const logEntry = document.createElement('text');
            const logBox = document.querySelector('.top-admin-box');
            logEntry.className = 'log';
            logEntry.innerHTML = text;
            logBox.appendChild(logEntry);
        
            logBox.scrollTop = logBox.scrollHeight;
        },
        victoryDisplay(victor, loser) {
            this.addToLog(`GAME OVER: ${victor.name} Victory!`)
            const playerGridSpace = document.querySelector('.player-board .grid-space');
            const opponentGridSpace = document.querySelector('.opponent-board .grid-space');
            loser.renderGrid(opponentGridSpace, 'show', true);
            victor.renderGrid(playerGridSpace, 'show', true);
        }
    }
}

export default interfaceDisplay