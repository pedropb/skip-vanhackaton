import {
    AUTH_USER,
    WAITING_AUTH,
    AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    authError: '',
    authenticated: false,
    waitingAuth: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case WAITING_AUTH:
            return { ...state, authError: '', waitingAuth: true };
        case AUTH_USER:
            return { ...state, authError: '', authenticated: true, waitingAuth: false };
        case AUTH_ERROR:
            return { ...state, authError: action.payload, waitingAuth: false };
        default:
            return state;
    }
}
