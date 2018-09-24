import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

function getCoordinates(shape) {
    const coordinates = [];
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j]) {
                coordinates.push({ x: j, y: i });
            }
        }
    }
    return coordinates;
}

function tetrominoGroup(xs, ys, color) {
    const arr = [];
    for (let i = 0; i< xs.length; i++) {
        arr.push(<Rect key={i} width={blockUnit} height={blockUnit} x={xs[i]} y={ys[i]} fill={color} stroke="black" strokeWidth={5} />);
    }
    return arr;
}
