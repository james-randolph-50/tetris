import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import GameField from './GameField.js';
import gameConstants from '../gameConstants.js';
import MenuContainer from '../containers/MenuContainer.js';
import CurrentGameInfo from '../containers/CurrentGameInfo.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const { fieldWidth, fieldHeight } = gameConstants;