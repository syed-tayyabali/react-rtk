import { counterState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: counterState = {
    value: 0,
}

// REDUCER
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAmmount(state: any, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
});

export const { setAmmount } = counterSlice.actions;
export default counterSlice.reducer;