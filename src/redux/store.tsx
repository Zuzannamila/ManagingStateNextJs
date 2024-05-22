import { Store, StoreEnhancer, applyMiddleware, createStore } from "redux";
import { CounterActionTypes } from "./actions/counterActions";
import { composeWithDevTools } from "redux-devtools-extension";
import { useMemo } from "react";

export type ItemState = {
    [key: string]: number;
}
const initialState: ItemState = {};

const reducer = (state = initialState, action: CounterActionTypes) => {
    const itemID = action.id;
    switch (action.type) {
        case 'INCREMENT':
            const newItemAmount = (state[itemID] ?? 0) + 1;
            return {
                ...state, 
                [itemID]: newItemAmount
            }
        case 'DECREMENT':
            if (state?.[itemID] > 0) {
                return {
                    ...state,
                    [itemID]: state[itemID] - 1
                }
            }
            return state;
        default:
            return state;
    }
};

const initStore = (preloadedState = initialState): Store<ItemState, CounterActionTypes> => {
    console.log('init')
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    );
}

let store: Store<ItemState, CounterActionTypes> | undefined;

const initializeStore = (preloadedState: ItemState): Store<ItemState, CounterActionTypes> => {
    let _store = store ?? initStore(preloadedState);
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        });
        store = undefined;
    }
    // Return _store when initializing Redux on the server-side
    if (typeof window === 'undefined')
        return _store
    if(!store) store = _store;
        return _store;
}

export const useStore = (initialState: ItemState) => {
    return useMemo(
        () => 
        initializeStore(initialState),
        [initialState]
    )
}