import { Control } from '../constants/control.js';

export const controls = [
    {
        keyboard: {
            [Control.LEFT]: 'KeyA',
            [Control.RIGHT]: 'KeyD',
            [Control.UP]: 'KeyW',
            [Control.DOWN]: 'KeyS',
            [Control.LIGHT_PUNCH]: 'KeyQ',
            [Control.MEDIUM_PUNCH]: 'KeyE',
            [Control.HEAVY_PUNCH]: 'KeyZ',
            [Control.LIGHT_KICK]: 'KeyX',
            [Control.MEDIUM_KICK]: 'KeyC',
            [Control.HEAVY_KICK]: 'KeyR',
        },
    },

    {
        keyboard: {
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.UP]: 'ArrowUp',
            [Control.DOWN]: 'ArrowDown',
            [Control.LIGHT_PUNCH]: 'ShiftRight',
            [Control.MEDIUM_PUNCH]: 'Slash',
            [Control.HEAVY_PUNCH]: 'Period',
            [Control.LIGHT_KICK]: 'Comma',
            [Control.MEDIUM_KICK]: 'Backslash',
            [Control.HEAVY_KICK]: 'Enter',
        },
    }
    
];