function occupied(grid, x, y) {
    return grid[x][y] !== 'grey';
}

export function getActualCoordinates(newTetromino) {
    const coordinates = [],
    const { shape, offsetX, offsetY } = newTetromino;
    const { blockUnit } = gameConstants;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape.length; j++) {
            if (shape[i][j]) {
                coordinates.push({x: j + (offsetX / blockUnit), y: i + (offsetY / blockUnit) });
            }
        }
    }
    return coordinates;
}

export