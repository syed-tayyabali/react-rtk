import { getFortnitePlaylist, getSinglePlaylist } from './actions';
import { fortniteShopState, shop, singleItem } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shopApiSlice } from './forniteShopApi';

const initialState: fortniteShopState = {
    data: [],
    loading: false,
    item: {
        name: '',
        description: '',
        images: {
            showcase: ''
        }
    }
}

const fortniteShopSlice = createSlice({
    name: 'fortniteShop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // CREATE ASYNC THUNK FUNCTION
        builder
            .addCase(getFortnitePlaylist.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getFortnitePlaylist.fulfilled, (state: any, action: PayloadAction<shop[]>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getFortnitePlaylist.rejected, (state: any) => {
                state.loading = true;
            })
            
            .addCase(getSinglePlaylist.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getSinglePlaylist.fulfilled, (state: any, action: PayloadAction<singleItem[]>) => {
                state.item = action.payload;
                state.loading = false;
            })
            .addCase(getSinglePlaylist.rejected, (state: any) => {
                state.loading = true;
            })

        // CREATE API REDUX TOOLKIT FUNCTION
        builder
            .addMatcher(shopApiSlice.endpoints.fetchFortnitePlaylist.matchPending, (state: any) => {
                state.loading = true;
            })
            .addMatcher(shopApiSlice.endpoints.fetchFortnitePlaylist.matchFulfilled, (state: any, action: PayloadAction<shop[]>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addMatcher(shopApiSlice.endpoints.fetchFortnitePlaylist.matchRejected, (state: any) => {
                state.loading = true;
            })
            
            .addMatcher(shopApiSlice.endpoints.fetchPlaylist.matchPending, (state: any) => {
                state.loading = true;
            })
            .addMatcher(shopApiSlice.endpoints.fetchPlaylist.matchFulfilled, (state: any, action: PayloadAction<singleItem[]>) => {
                state.item = action.payload;
                state.loading = false;
            })
            .addMatcher(shopApiSlice.endpoints.fetchPlaylist.matchRejected, (state: any) => {
                state.loading = true;
            })
    }
});

export default fortniteShopSlice.reducer;