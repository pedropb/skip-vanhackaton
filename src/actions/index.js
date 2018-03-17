import api from '../Api';

import {
    AUTH_USER,
    AUTH_ERROR,
    WAITING_AUTH
} from './types';

export function loginCustomer({ email, password }) {
    return function (dispatch) {
        dispatch({ type: WAITING_AUTH });

        return api.signIn(email, password)
            .then(token => {
                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', token);
            })
            .catch(() => {
                dispatch({
                    type: AUTH_ERROR,
                    payload: 'Invalid credentials.'
                });
            });
    }
}