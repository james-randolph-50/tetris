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

export function getNewColoredGrid(grid, tetromino, color) {
    const gridCopy = grid.map((x) => [...x]);
    const coords = getActualCoordinates(tetromino);
    for (let j = 0; j < coords.length; j++) {
        const { x, y } = coords[j];
        gridCopy[x][y] = color;
    }
    return gridCopy;
}

export function getCompletedLines(grid, tetromino) {
    const linesToClear = [];
    const gridCopy = getNewColoredGrid(grid, tetromino, 'tmp');
    const coords = getActualCoordinates(tetromino);
    const rows = coords.reduce((prev, cur) => {
        prev[cur.y] = prev[cur.y] ? prev[cur.y] + 1 : 1;
        return prev;
    }, []);
    
}