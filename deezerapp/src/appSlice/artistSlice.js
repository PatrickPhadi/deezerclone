
import { createSlice } from '@reduxjs/toolkit';
import { api } from '../shared/utils/api'

const initialState = {
    artists: [],
    artistInfo: {},
    error: null,
    loading: false,
    searching: false
};

export const artistSlice = createSlice({
    name: 'Artists',
    initialState,
    reducers: {
        clearDetails: () => initialState,
        searching: (state) => ({
            ...state,
            loading: true,
            searching: true
        }),
        pending: (state) => ({
            ...state,
            loading: true
        }),
        rejected: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
            searching: false
        }),
        unmountArtist: (state) => ({
            ...state,
            artistInfo: {}
        }),
        fulfilled: (state, { payload }) => ({
            ...state,
            loading: false,
            searching: false,
            [payload.name]: payload.data
        })
    }
});

export const { clearDetails, rejected, pending, searching, unmountArtist, fulfilled } = artistSlice.actions;

/**
 * Search for artist
 * @param {String} query
 */
export const searchArtist = (query) => (dispatch) => {
    dispatch(searching());
    api(`/artists/search?qs=${query}`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'artists', data: response.data }));
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

/**
 * Get artist info
 * @param {String} artistId
 */
export const getArtistInfo = (artistId) => (dispatch) => {
    dispatch(pending());
    api(`/artist/${artistId}/details`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'artistInfo', data: response }));
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

export default artistSlice.reducer;