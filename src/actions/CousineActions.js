import api from '../Api';

import {
    LOADING_COUSINES,
    LOADING_COUSINES_ERROR,
    COUSINES_LOADED
} from './types';

export function loadCousines() {
    return (dispatch) => {
        dispatch({ type: LOADING_COUSINES });
        return api.loadCousines()
            .then(cousines => {
                dispatch({
                    type: COUSINES_LOADED,
                    payload: cousines
                });
            })
            .catch(() => {
                dispatch({
                    type: LOADING_COUSINES_ERROR,
                    payload: "Error while retrieving cousines"
                });
            });
    }
}
