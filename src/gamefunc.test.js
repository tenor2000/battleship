import {Ship, Gameboard} from './gamefunc.js';

test('Ship is created', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
})

test('Ship coordinates are set', () => {
    const ship = Ship(3);
    const coords = [[0,0], [0,1], [0,2]];
    expect(ship.setShipCoordinates(coords)).toBe(true);
    expect(ship.coordinates).toEqual(coords);
})

test('Ship coordinates do not match length', () => {
    const ship = Ship(3);
    const coords = [[0,0], [0,1]];
    expect(ship.setShipCoordinates(coords)).toBe(false);
    expect(ship.coordinates.length).toEqual(0);
})

test('Ship is hit', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
})

test('Attack misses', () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const coords = [[0,0], [0,1], [0,2]];
    ship.setShipCoordinates(coords);
    gameboard.addShip(ship, coords);
    expect(gameboard.receiveAttack([0,3])).toBe(false);
    expect(gameboard.misses).toEqual([[0,3]]);
})

test('Attack hits', () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const coords = [[0,0], [0,1], [0,2]];
    gameboard.addShip(ship, coords);
    expect(gameboard.receiveAttack([0,0])).toBe(true);
    expect(gameboard.misses).toEqual([]);
})

test('All ships sunk', () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const coords = [[0,0], [0,1], [0,2]];
    gameboard.addShip(ship, coords);
    expect(gameboard.checkForAllSunk()).toBe(false);
    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([0,1]);
    gameboard.receiveAttack([0,2]);
    expect(gameboard.checkForAllSunk()).toBe(true);
})