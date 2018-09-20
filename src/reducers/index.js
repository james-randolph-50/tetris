import { combineReducers } from 'redux';
import { getNewClearedGrid } from '../lib/index.js';
import gameConstants from '../gameConstants.js';
import * as actions from '../actions/index.js';

const { initialGrid, tetrominos, blockUnit } = gameConstants;

function gameStatus(state = 'IDLE', action) {
    switch (action.type) {
        case actions.START_GAME:
        case actions.UNPAUSE_GAME:
            return 'PLAYING';
        case actions.PAUSE_GAME:
            return 'PAUSED';
        case actions.GAME_OVER:
            return 'GAME_OVER';
        default:
            return state;
    }
}

function activeTetrominos(state = initialGrid, action) {
    switch (action.type) {
        case actions.ADD_TETROMINO:
            return getNewClearedGrid(state, action.currentTetromino, action.color);
    }
}