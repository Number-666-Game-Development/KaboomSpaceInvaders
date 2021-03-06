'use strict';

import kaboom from 'kaboom';

kaboom();

loadRoot("http://localhost:3001/");
loadSprite('invader', 'images/sprites/invader.png');
loadSprite('wall', 'images/sprites/wall.png');
loadSprite('player', 'images/sprites/ship.png');

camPos(300, 150);
camScale(2.2);

const PLAYER_VELOCITY = 200;
const TIME_LEFT = 30;

layer(['obj', 'ui'], 'obj')

const player = add([
    sprite('player'),
    scale(0.32),
    pos(280, 200),
    origin('center'),
]);

keyDown('right', () => {
    player.move(PLAYER_VELOCITY, 0);
});
keyDown('left', () => {
    player.move(-PLAYER_VELOCITY, 0);
});

addLevel([
    '!^^^^^^^^^^^^^^^     &',
    '!^^^^^^^^^^^^^^^     &',
    '!^^^^^^^^^^^^^^^     &',
    '!^^^^^^^^^^^^^^^     &',
    '!                    &',
    '!                    &',
    '!                    &',
    '!                    &',
    '!                    &',
    '!                    &',
], {
    width: 30, 
    height: 22, 
    '^': () => [
        sprite('invader'),
        scale(0.32)
    ],
    '!': () => [
        sprite('wall'),
        'left-wall',
    ],
    '&': () => [
        sprite('wall'),
        'right-wall',
    ],
});

const score = add([
    text('0'),
    pos(590, 0),
    layer('ui'),
    scale(0.5),
    {
        value: 0,
    },
]);

const timer = add([
    text('0'),
    pos(594, 30),
    layer('ui'),
    scale(0.3),
    {
        time: TIME_LEFT,
    }
]);

timer.action(() => {
    timer.time -=dt(),
    timer.text = timer.time
});