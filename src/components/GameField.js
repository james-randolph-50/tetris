import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import Banner from './Banner.js';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
    if (isPlaying) {
        return (
            <div style={{display: 'inline'}}>
                <div className={style.gameField}>
                    <Stage width={fieldWidth} height={fieldHeight}>
                        <Layer>
                            <CurrentTetromino />
                            <ActiveTetrominos />
                        </Layer>
                    </Stage>
                    { isPaused ? <Banner label="PAUSED" color="black" opacity=".5"/> : null}
            </div></div>
        )
    }
}