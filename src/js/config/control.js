import { Control } from '../constants/control.js';

export const controls = [
    {
        keyboard: {
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.UP]: 'ArrowUp',
            [Control.DOWN]: 'ArrowDown',
            [Control.LIGHT_PUNCH]: 'ControlLeft',
            [Control.MEDIUM_PUNCH]: 'AltLeft',
            [Control.HEAVY_PUNCH]: 'Space',
            [Control.LIGHT_KICK]: 'ShiftLeft',
            [Control.MEDIUM_KICK]: 'KeyZ',
            [Control.HEAVY_KICK]: 'KeyX',
        },
    },
    {
        keyboard: {
            [Control.LEFT]: 'KeyF',
            [Control.RIGHT]: 'KeyH',
            [Control.UP]: 'KeyT',
            [Control.DOWN]: 'KeyG',
            [Control.LIGHT_PUNCH]: 'KeyQ',
            [Control.MEDIUM_PUNCH]: 'KeyW',
            [Control.HEAVY_PUNCH]: 'KeyE',
            [Control.LIGHT_KICK]: 'KeyA',
            [Control.MEDIUM_KICK]: 'KeyS',
            [Control.HEAVY_KICK]: 'KeyD',
        },
    }
];