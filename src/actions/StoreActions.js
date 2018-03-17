import api from '../Api';

import {
    LOADING_STORES,
    STORES_LOADED,
    LOADING_STORES_ERROR
} from './types';

export function loadStores() {
    return (dispatch) => {
        dispatch({ type: LOADING_STORES });
        return api.loadStores()
            .then(stores => {
                dispatch({
                    type: STORES_LOADED,
                    payload: stores
                });
            })
            .catch(() => {
                dispatch({
                    type: LOADING_STORES_ERROR,
                    payload: "Error while retrieving stores"
                });
            });
    }
}
