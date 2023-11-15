import { FighterState } from "../../constants/fighter.js";

export class Fighter {
    constructor(name, x, y, direction) {
        this.name = name;
        this.image = new Image();
        this.frames = new Map();
        this.position = { x, y };
        this.direction = direction;
        this.velocity = 0;
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.states = {
            [FighterState.IDLE]: {
                init: this.handleWalkIdleInit.bind(this),
                update: this.handleWalkIdleState.bind(this),
            },
            [FighterState.WALK_FORWARD]: {
                init: this.handleWalkForwardInit.bind(this),
                update: this.handleWalkForwardState.bind(this),
            },
            [FighterState.WALK_BACKWARD]: {
                init: this.handleWalkBackwardInit.bind(this),
                update: this.handleWalkBackwardState.bind(this),
            },
            [FighterState.JUMP_UP]: {
                init: this.handleWalkJumpUpInit.bind(this),
                update: this.handleWalkJumpUpState.bind(this),
            },
        }

        this.changeState = (FighterState.Idle);
    }

    changeState(newState) {
        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init();
    }

    handleWalkIdleInit() {
        this.velocity = 0;
    }
    handleWalkIdleState() {

    }

    handleWalkForwardInit() {
        this.velocity = 150 * this.direction;
    }
    handleWalkForwardState() {

    }

    handleWalkBackwardInit() {
        this.velocity = -150 * this.direction;
    }
    handleWalkBackwardState() {
        
    }

    handleWalkJumpUpInit() {
        
    }
    handleWalkJumpUpState() {
        
    }

    updateStageConstraints(context) {
        const WIDTH = 32;

        if (this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH;
        }
    
        if (this.position.x < WIDTH) {
            this.position.x = WIDTH;
        }
    }

    update(time, context) {
        if (time.previous > this.animationTimer + 60) {
            this.animationTimer = time.previous;
            
            this.animationFrame++;
            if (this.animationFrame > 5) this.animationFrame = 0;
        }
    
        this.position.x += this.velocity * time.secondsPassed;

        this.states[this.currentState].update(time, context);
        this.updateStageConstraints(context);
    }

    draw(context) {
        const [
            [x, y, width, height],
            [originX, originY],
        ] = this.frames.get(this.animations[this.currentState][this.animationFrame])
    
        context.scale(this.direction, 1);
        context.drawImage(
            this.image,
            x, y, 
            width, height, 
            Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, 
            width, height
        );
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}
