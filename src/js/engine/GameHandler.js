import { StreetFighterGame } from "../StreetFighterGame";
import { canvas } from "./Canvas";


export function end() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    console.log('game ended');
}