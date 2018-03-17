import {
    LOADING_STORES,
    LOADING_STORES_ERROR,
    STORES_LOADED
} from '../actions/types';

const INITIAL_STATE = {
    storesLoadingError: '',
    storesLoaded: false,
    stores: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING_STORES:
            return { ...state, storesLoadingError: '', storesLoaded: false, stores: [] };
        case LOADING_STORES_ERROR:
            return { ...state, storesLoadingError: action.payload, storesLoaded: false, stores: [] };
        case STORES_LOADED:
            return { ...state, storesLoadingError: '', storesLoaded: true, stores: action.payload };
        default:
            return state;
    }
}
