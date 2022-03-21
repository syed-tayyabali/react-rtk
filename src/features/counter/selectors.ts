import { counterState } from './types';
import { createSelector } from 'reselect';
import { RootState } from './../../app/store';


// SELECTORS
export const getCounterState = (state: RootState): counterState => state.counter;

export const getBalance = createSelector(
    getCounterState,
    ({ value }) => value 
);
