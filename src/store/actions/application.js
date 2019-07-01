import { SET_SESSION, SET_PROFILE } from './_types';

export const setSession = (value) => {
    return {
        type: SET_SESSION,
        payload: value
    }
}