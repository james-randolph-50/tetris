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

export const rotatedTetromino = () => (
    function (dispatch, getState) {
        const {activeTetrominos, currentTetromino, gameStatus } = getState();
        const rotatedTetromino = Object.assign({}, currentTetromino);
        rotatedTetromino.shape = rotateArray(rotatedTetromino);
        if (!checkCollisions('rotation', activeTetrominos, rotatedTetromino) && gameStatus === 'PLAYING') {
            dispatch(rotateRight(rotatedTetromino.shape));
        }
    }
);

export const moveTetromino = (direction) => (
    function (dispatch, getState) {
        const { activeTetrominos, currentTetromino, nextTetromino, gameStatus } = getState();
        const collisionCheck = checkCollisions(diriection, activeTetrominos, currentTetromino);

        if (gameStatus === 'PAUSED' || gameStatus === 'GAME_OVER') {
            return;
        }

        switch (direction) {
            case 'left':
                if (collisionCheck === false) {
                    dispatch(moveLeft());
                }
                return;
            case 'right':
                if (collisionCheck === false) {
                    dispatch(moveRight());
                }
            case 'down':
                if (collisionCheck === false) {
                    dispatch(moveDown());
                } else if (collisionCheck === GAME_OVER) {
                    dispatch(gameOver());
                } else {
                    const clearedLines = getCompletedLines(activeTetrominos, currentTetromino).length;
                    dispatch(addScore(clearedLines));
                    dispatch(addTetromino(currentTetromino, nextTetromino));
                }
                return;
            default:
                return;
        }
    }
);

export const loadMenu = () => (
    function(dispatch) {
        function handleSpaceBar(e) {
            if (e.keyCode === 32) {
                dispatch(loadGame());
                window.removeEventListener('keyup', handleSpaceBar);
            }
        }
        window.addEventListener('keyup', handleSpaceBar);
    }
);

export const loadGame = () => (
    function (dispatch, getState) {
        dispatch(startGame());
        function handleMoving(e) {
            case 37:
                e.preventDefault();
                dispatch(moveTetromino('left'));
                break;
        }
    }
)