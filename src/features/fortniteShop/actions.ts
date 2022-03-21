import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from './../../app/store';


// ACTIONS
export const getFortnitePlaylist = createAsyncThunk(
    'fortnite/getPlaylist',
    async () => {
        try {
            const response = await fetch('https://fortnite-api.com/v1/playlists');
            const respData = await response.json()
            return respData.data;
        } catch (e) {
            console.log(e);
        }
    }
);

export const getSinglePlaylist = createAsyncThunk(
    'fortnite/getItem',
    async (id: string) => {
        try {
            const response = await fetch(`https://fortnite-api.com/v1/playlists/${id}`);
            const respData = await response.json()
            return respData.data;
        } catch (e) {
            console.log(e);
        }
    }
);