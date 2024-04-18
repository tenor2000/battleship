// Interface set up
export const createGrid = (container) => {
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

    container.appendChild(zeroSpace);
    container.appendChild(xCoordSpace);
    container.appendChild(yCoordSpace);
    container.appendChild(gridSpace);

};

export const renderBoard = (boardObj) => {
    const board = document.createElement('div');
}