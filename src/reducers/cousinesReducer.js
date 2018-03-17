import {
    LOADING_COUSINES,
    LOADING_COUSINES_ERROR,
    COUSINES_LOADED
} from '../actions/types';

const INITIAL_STATE = {
    cousinesLoadingError: '',
    cousinesLoaded: false,
    cousines: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING_COUSINES:
            return { ...state, cousinesLoadingError: '', cousinesLoaded: false, cousines: [] };
        case LOADING_COUSINES_ERROR:
            return { ...state, cousinesLoadingError: action.payload, cousinesLoaded: false, cousines: [] };
        case COUSINES_LOADED:
            return { ...state, cousinesLoadingError: '', cousinesLoaded: true, cousines: action.payload };
        default:
            return state;
    }
}
