import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import Banner from './Banner.js';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;