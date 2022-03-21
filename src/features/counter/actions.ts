import { AppThunk } from './../../app/store';
import { getBalance } from './selectors';
import { setAmmount } from './counterSlice';


// ACTIONS
export const addAmmount = (value: number): AppThunk => (dispatch: any, getState: any) => {
    const ammount = getBalance(getState());
    let newBal = ammount + value;
    dispatch(setAmmount(newBal))
};

export const subtractAmmount = (value: number): AppThunk => (dispatch: any, getState: any) => {
    const ammount = getBalance(getState());
    let newBal = ammount - value;
    dispatch(setAmmount(newBal))
};