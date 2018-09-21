import gameConstants from '../gameConstants.js';
import { rotateArray, checkCollisions, getCompletedLines } from '../lib/index.js';

export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const GAME_OVER = 'GAME_OVER';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ADD_TETROMINO = 'ADD_TETROMINO';
export const PAUSE_GAME = 'PAUSE_GAME';
export const UNPAUSE_GAME = 'UNPAUSE_GAME';

export const addTetromino = (currentTetromino, nextTetromino) => {
    const { shapesMapping } = gameConstants;
    const newRandomNumber = Math.floor(Math.random() * 7 );
    const nextRandomShape = shapesMapping[newRandomNumber];

    return {
        type: ADD_TETROMINO,
        currentTetromino,
        color: currentTetromino.color,
        nextTetromino,
        nextRandomShape,
    };
};

export const startGame = () => {
    const { shapesMapping } = gameConstants;
    const currentRandomNumber = Math.floor(Math.random() * 7);
    const nextRandomNumber = Math.floor(Math.random() * 7);
    const currentRandomShape = shapesMapping[currentRandomNumber];
    const nextRandomShape = shapesMapping[nextRandomNumber];

    return {
        type: START_GAME,
        currentRandomShape,
        nextRandomShape,
    };
};

export const pauseGame = () => ({
    type: PAUSE_GAME,
});

export const unpauseGame = () => ({
    type: UNPAUSE_GAME,
});

export const changePauseState = () => (
    function (dispatch, getState) {
        const { gameStatus } = getState();
        if (gameStatus === 'PAUSED') {
            dispatch(unpauseGame());
        } else {
            dispatch(pauseGame());
        }
    }
);

export const gameOver = () => ({
    type: GAME_OVER,
});

export const addScore = (clearedLines) => ({
    type: ADD_SCORE,
    points: Math.pow(clearedLines, 2) * 100,
    clearedLines,
});

export const moveRight = () => ({
    type: MOVE_RIGHT,
});

export const moveLeft = () => ({
    type: MOVE_LEFT,
});

export const moveDown = () => ({
    type: MOVE_DOWN,
});

export const rotateRight = (rotatedTetromino) => ({
    type: ROTATE_TETROMINO,
    rotatedTetromino,
});