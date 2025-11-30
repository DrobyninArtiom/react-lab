// 2_5_2 Implement the state queue yourself - Implemented state queue processing with proper handling of values and updater functions
import { Que } from "./App";
export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

    for (const update of queue) {
        if (typeof update === 'function') {
            finalState = update(finalState);
        } else {
            finalState = update;
        }
    }

    return finalState;
}