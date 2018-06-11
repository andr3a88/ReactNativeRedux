import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};