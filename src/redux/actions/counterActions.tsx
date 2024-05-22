export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT;
    id: number;
}

interface DecrementAction {
    type: typeof DECREMENT;
    id: number;
}

export type CounterActionTypes = IncrementAction | DecrementAction;

