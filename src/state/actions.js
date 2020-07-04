
// TODO

import {
    AUTH_USER,
    SET_LOADED
} from './types'




export function authUser(state) {
    return {
        type: AUTH_USER,
        payload: state
    }
}

export function setLoading(state) {
    return {
        type: SET_LOADED,
        payload: state
    }
}

