export function Ship(length) {
    return {
        length,
        hits: 0,
        sunk: false,
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
        }
    }
}

export function Gameboard() {
    return {
        ships: [],
        misses: [],
        hits: [],
        addShip(ship, coords) {
            if (ship.length !== coords.length) {
                return false
            }
            ship.setShipCoordinates(coords);
            this.ships.push(ship);
            return true
        },
        receiveAttack(coord) {
            if (this.misses.includes(coord)) {
                console.log('already logged')
                return false
            }

            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) {
                    this.hits.push(coord);
                    this.ships[i].hit();
                    this.ships[i].isSunk();
                    return true;
                }
            }
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

export function Player(type) {
    return {
        type,
        gameboard: Gameboard(),
        renderGrid(container, boardType) {
            container.innerHTML = '';
            for (let i = 0; i < 100; i++) {
                const coord = [Math.floor(i / 10), i % 10];
                const cell = document.createElement('div');
                cell.className = 'cell';
                if (this.gameboard.hits.some(hit => coord[0] === hit[0] && coord[1] === hit[1])) {
                    cell.classList.add('hit');
                    if (boardType === 'player') {
                        cell.innerHTML = '0';
                    }
                } else if (this.gameboard.misses.some(miss => coord[0] === miss[0] && coord[1] === miss[1])) {
                    cell.classList.add('miss');
                } else if (this.gameboard.ships.some(ship => ship.coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) && boardType === 'player') {
                    cell.innerHTML = '0';
                } else {
                    cell.classList.add('empty');
                    if (boardType === 'opponent') {
                        this.buildEvent(cell, i);
                    } 
                }
                
                container.appendChild(cell);
            }
        },
        buildEvent(cell, index) {
            cell.addEventListener('click', () => {
                const coord = [Math.floor(index / 10), index % 10];
                if (this.gameboard.receiveAttack(coord)) {
                    cell.classList.add('hit');
                    cell.classList.remove('empty');
                    this.gameboard.hits.push(coord);
                } else {
                    cell.classList.add('miss');
                    cell.classList.remove('empty');
                    this.gameboard.misses.push(coord);
                }
                const event = new Event('Turn Taken');
                document.dispatchEvent(event);
                console.log('turn taken')
            })
        }
    }
}