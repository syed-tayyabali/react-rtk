import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fortniteShopSlice from '../features/fortniteShop/fortniteShopSlice';
import { shopApiSlice } from '../features/fortniteShop/forniteShopApi';
// import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        fortniteShop: fortniteShopSlice,
        [shopApiSlice.reducerPath]: shopApiSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;