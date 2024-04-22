export function Ship(shipType, length) {
    return {
        length,
        hits: 0,
        sunk: false,
        shipType,
        coordinates: [],
        hit() {
            this.hits += 1;
        },
        isSunk() {
            if (this.hits === this.length) {
                this.sunk = true;
            }
        },
        setShipCoordinates(coords) {
            if (coords.length === this.length) {
                this.coordinates = coords; 
            } else {
                return false
            }
            return true
        },
        genRandCoords(usedCoords) {
            // Function to generate random coordinates for each ship
            const coords = [];
            const axis = Math.random() < 0.5 ? 'row' : 'column';
        
            let startCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            if (axis === 'row' && startCoord[1] > 9 - this.length) {
                startCoord[1] = 9 - this.length;
            } else if (axis === 'column' && startCoord[0] > 9 - this.length) {
                startCoord[0] = 9 - this.length;
            }
        
            let currentCoord = [...startCoord];
        
            while (coords.length < this.length) {
                if (!usedCoords.some(coord => coord[0] === currentCoord[0] && coord[1] === currentCoord[1])) {
                    coords.push([...currentCoord]);
                    usedCoords.push([...currentCoord]);
                } else {
                    startCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
                    if (axis === 'row' && startCoord[1] > 9 - this.length) {
                        startCoord[1] = 9 - this.length;
                    } else if (axis === 'column' && startCoord[0] > 9 - this.length) {
                        startCoord[0] = 9 - this.length;
                    }
                    currentCoord = [...startCoord];
                    coords.length = 0;
                }
        
                if (axis === 'row') {
                    currentCoord[1] = (currentCoord[1] + 1) % 10;
                } else {
                    currentCoord[0] = (currentCoord[0] + 1) % 10;
                }
            }
        
            return coords;
        }
    }
}

export function Gameboard(opponentName, display) {
    // Opponent name used for logging as the opponent is clicking on the player's board
    return {
        ships: [],
        misses: [],
        hits: [],
        opponentName,
        addShip(ship, coords) {
            if (ship.length !== coords.length) {
                return false
            }
            ship.setShipCoordinates(coords);
            this.ships.push(ship);
            return true
        },
        receiveAttack(coord) {
            const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            if (this.misses.includes(coord)) {
                return false
            }

            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) {
                    this.hits.push(coord);
                    this.ships[i].hit();
                    this.ships[i].isSunk();
                    if (this.ships[i].sunk) {
                        display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- ${this.ships[i].shipType} sunk!`);
                        return true
                    }
                    
                    display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- HIT!`);
                    return true
                }
            }
            display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- miss!`)
            this.misses.push(coord);
            return false
        },
        checkForAllSunk() {
            for (let i = 0; i < this.ships.length; i++) {
                if (!this.ships[i].sunk) {
                    return false
                }
            }
            return true
        },
    }
}

export function Player(name, opponentName, display) {
    return {
        name,
        gameboard: Gameboard(opponentName, display),
        renderGrid(container, info='hidden', disableClick=false) {
            container.innerHTML = '';

            for (let i = 0; i < 100; i++) {
                const coord = [Math.floor(i / 10), i % 10];
                const cell = document.createElement('div');
                cell.className = 'cell';

                if (this.gameboard.hits.some(hit => coord[0] === hit[0] && coord[1] === hit[1])) {
                    cell.classList.add('hit');
                    if (info === 'show') {
                        cell.innerHTML = '0';
                    }
                } else if (this.gameboard.misses.some(miss => coord[0] === miss[0] && coord[1] === miss[1])) {
                    cell.classList.add('miss');
                } else if (this.gameboard.ships.some(ship => ship.coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) && info === 'show') {
                    cell.innerHTML = '0';
                } else {
                    cell.classList.add('empty');
                    if (info === 'hidden') {
                        this.buildEvent(cell, i, disableClick);
                    } 
                }
                
                container.appendChild(cell);
            }

        },
        buildEvent(cell, index, disableClick) {
            const coord = [Math.floor(index / 10), index % 10];
            cell.addEventListener('click', () => {
                if (this.gameboard.receiveAttack(coord)) {
                    cell.classList.add('hit');
                    cell.classList.remove('empty');
                    this.gameboard.hits.push(coord);
                } else {
                    cell.classList.add('miss');
                    cell.classList.remove('empty');
                    this.gameboard.misses.push(coord);
                }
                if (!disableClick) {
                    const event = new Event('Turn Taken');
                    document.dispatchEvent(event);
                }
            })
        },
        setUpShips(random=true) {
            const battleship = Ship('battleship', 4);
            const destroyer = Ship('destroyer', 3);
            const carrier = Ship('carrier', 5);
            const submarine = Ship('submarine', 3);
            const patrolboat = Ship('patrol boat', 2);
        
            const shipArray = [battleship, destroyer, carrier, submarine, patrolboat];
        
            // WIP
            if (random) {
                const usedCoords = [];
                shipArray.forEach(ship => {
                const shipCoords = ship.genRandCoords(usedCoords);
                usedCoords.push(...shipCoords);
                this.gameboard.addShip(ship, shipCoords);
              })
            } else {
                display.setUpShipDisplay(shipArray);
                this.gameboard.addEventListener('drop', () => false)
                this.gameboard.addShip(destroyer, [[9,5], [9,6], [9,7]]);
                this.gameboard.addShip(carrier, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
                this.gameboard.addShip(patrolboat, [[1,8], [2,8]]);
                this.gameboard.addShip(submarine, [[5,9], [5,8], [5,7]]);
                this.gameboard.addShip(battleship, [[7,4], [6,4], [5,4], [4,4]]);
            }
          }
    }
}



export function compAttack(opponent, difficulty=0) {
    // Computer makes random attack
    const coordMatches = (coord1, coord2) => coord1[0] === coord2[0] && coord1[1] === coord2[1];
  
    const isCoordInArrays = (coord, misses, hits) => misses.some(c => coordMatches(c, coord)) || hits.some(c => coordMatches(c, coord));
    let randomCoord;
    if (difficulty === 0) {
        
        do {
            randomCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        } while (isCoordInArrays(randomCoord, opponent.gameboard.misses, opponent.gameboard.hits));
    }
    opponent.gameboard.receiveAttack(randomCoord);
    const event = new Event('Turn Taken');
    document.dispatchEvent(event);
  }
