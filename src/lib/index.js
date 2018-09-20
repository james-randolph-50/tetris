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
    for (const row in rows) {
        let flag = true;
        for (let j = 0; j < 10; j++) {
            if (gridCopy[j][row] === 'grey') {
                flag = false;
            }
        }
        if (flag) {
            linesToClear.push(row);
        }
    }
    return linesToClear;
}

export function getNewClearedGrid(grid, tetromino, color) {
    const linesToClear = getCompletedLines(grid, tetromino);
    const gridCopy = getNewColoredGrid(grid, tetromino, color);
    for (const row of linesToClear) {
        for (let j = 0; j < 10; j++) {
            gridCopy[j][row] = 'grey';
        }
    }
    for (let row = linesToClear[0] - 1; row >= 0; row--) {
        const shift = linesToClear.length;
        for (let j = 0; j < 10; j++) {
            gridCopy[j][row + shift] = gridCopy[j][row];
        }
    }
    return gridCopy;
}