import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const mapStateToProps = ({ currentTetromino }) => ({
    shape: currentTetromino.shape,
    color: currentTetromino.color,
    name: currentTetromino.name,
    offsetX: currentTetromino.offsetX,
    offsetY: currentTetromino.offsetY,
});

