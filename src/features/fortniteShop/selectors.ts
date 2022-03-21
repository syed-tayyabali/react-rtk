import { createSelector } from 'reselect';
import { fortniteShopState } from './types';
import { RootState } from './../../app/store';

export const getFortniteState = (state: RootState): fortniteShopState => state.fortniteShop;

export const getData = createSelector(
    getFortniteState,
    ({ data }) => data 
)

export const getLoading = createSelector(
    getFortniteState,
    ({ loading }) => loading 
)

export const getItem = createSelector(
    getFortniteState,
    ({ item }) => item 
)