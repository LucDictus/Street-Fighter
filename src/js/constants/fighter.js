export const PUSH_FRICTION = 66;
export const FIGHTER_START_DISTANCE = 88;
export const FIGHTER_HURT_DELAY = 7 + 8;

export const FighterDirection = {
    LEFT: -1,
    RIGHT: 1,
};

export const FighterId = {
    RYU: 'Ryu',
    KEN: 'Ken',
}

export const FighterAttackType = {
    PUNCH: 'punch',
    KICK: 'kick',
}

export const FighterAttackStrength = {
    LIGHT: 'light',
    MEDIUM: 'medium',
    HEAVY: 'heavy',
}

export const FighterHurtBox = {
    HEAD: 'head',
    BODY: 'body',
    FEET: 'feet',
}

export const FighterAttackBaseData = {
    [FighterAttackStrength.LIGHT]: {
        score: 100,
        damage: 12,
    },
    [FighterAttackStrength.MEDIUM]: {
        score: 300,
        damage: 20,
    },
    [FighterAttackStrength.HEAVY]: {
        score: 500,
        damage: 28,
    },
}

export const FighterState = {
    IDLE: 'idle',
    WALK_FORWARD: 'walkForwards',
    WALK_BACKWARD: 'walkBackwards',
    JUMP_START: 'jumpStart',
    JUMP_UP: 'jumpUp',
    JUMP_FORWARD: 'jumpForward',
    JUMP_BACKWARD: 'jumpBackward',
    JUMP_LAND: 'jumpLand',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouchDown',
    CROUCH_UP: 'crouchUp',
    IDLE_TURN: 'idleTurn',
    CROUCH_TURN: 'crouchTurn',
    LIGHT_PUNCH: 'lightPunch',
    MEDIUM_PUNCH: 'mediumPunch',
    HEAVY_PUNCH: 'heavyPunch',
    LIGHT_KICK: 'lightKick',
    MEDIUM_KICK: 'mediumKick',
    HEAVY_KICK: 'heavyKick',
    HURT_HEAD_LIGHT: 'hurt-head-light',
    HURT_HEAD_MEDIUM: 'hurt-head-medium',
    HURT_HEAD_HEAVY: 'hurt-head-heavy',
    HURT_BODY_LIGHT: 'hurt-body-light',
    HURT_BODY_MEDIUM: 'hurt-body-medium',
    HURT_BODY_HEAVY: 'hurt-body-heavy',
    KO: 'ko',
}

export const FrameDelay = {
    FREEZE: 0,
    TRANSITION: -1,
}

export const PushBox = {
    IDLE: [-16, -80, 32, 78],
    JUMP: [-16, -91, 32, 66],
    BEND: [-16, -58, 32, 58],
    CROUCH: [-16, -50, 32, 50],
};

export const HurtBox = {
    IDLE: [[-8, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
    BACKWARD: [[-19, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
    FORWARD: [[-3, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
    JUMP: [[-13, -106, 28, 18], [-26, -90, 40, 42], [-22, -66, 38, 18]],
    BEND: [[-2, -68, 24, 18], [-16, -53, 44, 24], [-16, -24, 44, 24]],
    CROUCH: [[6, -61, 24, 18], [-16, -46, 44, 24], [-16, -24, 44, 24]],
    PUNCH: [[11, -94, 24, 18], [-7, -77, 40, 43], [-7, -33, 40, 33]],
}

export const hurtStateValidFrom = [
    FighterState.IDLE, FighterState.WALK_BACKWARD, FighterState.WALK_FORWARD,
    FighterState.JUMP_LAND, FighterState.JUMP_START, FighterState.IDLE_TURN,
    FighterState.LIGHT_PUNCH, FighterState.MEDIUM_PUNCH, FighterState.HEAVY_PUNCH,
    FighterState.LIGHT_KICK, FighterState.MEDIUM_KICK, FighterState.HEAVY_KICK,
    FighterState.HURT_HEAD_LIGHT, FighterState.HURT_HEAD_MEDIUM, FighterState.HURT_HEAD_HEAVY,
    FighterState.HURT_BODY_LIGHT, FighterState.HURT_BODY_MEDIUM, FighterState.HURT_BODY_HEAVY,
];