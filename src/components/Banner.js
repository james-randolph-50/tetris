import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import style from '../styles/styles.css'
import { startGame } from '../actions/index.js';
import { connect } from 'react-redux';

let Banner = ({label, color, opacity, dispatch}) => {
    const banner = {
        background: `rgba(0,0,0,${opacity})`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0px',
    };
}