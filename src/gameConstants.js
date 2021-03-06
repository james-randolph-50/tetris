const initialGrid = [];

export default {
    fieldWidth: 300,
    fieldHeight: 660,
    blockUnit: 30,
    shapesMapping: [
        'straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake'
    ],
    tetrominos: {
        straight: {
            shape: [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'red',
        },
        square: {
            shape: [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'blue',
        },
        cross: {
            shape: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'green',
        },
        leftGun: {
            shape: [
                [0, 0, 1, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'purple',
        },
        rightGun: {
            shape: [
                [0, 0, 1, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'orange',
        },
        leftSnake: {
            shape: [
                [1, 1, 0, 0],
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [1, 1, 0, 0],
            ],
            color: 'yellow',
        },
        rightSnake: {
            shape: [
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'brown'
        },
    },
    initialGrid,
};