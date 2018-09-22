import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import style from '../styles/styles.css';
import NextTetromino from '../containers/NextTetromino.js';
import { changePauseState } from '../actions/index.js';

let GameInfo =({points, clearedLines, nextTetromino, isPLaying, isPaused, isGameOver, dispatch}) => {
    const buttonStyle = {
        margin: '20% 0',
    };
    if (isPlaying) {
        return (
            <div className={style.gameInfo}>
                <RaisedButton
            </div>
        )
    }
}