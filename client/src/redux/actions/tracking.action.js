import {
    STORE_SESSION_SUCCESS,
    STORE_SESSION_FAIL,
    GET_SESSIONS_SUCCESS,
    GET_SESSIONS_FAIL
} from '../constants';

export const asyncSessionSaveSuccess = data => ({ type: STORE_SESSION_SUCCESS, data });

export const asyncSessionSaveFailed = err => ({ type: STORE_SESSION_FAIL, err });

export const asyncGetSessionsSuccess = data => ({ type: GET_SESSIONS_SUCCESS, data });

export const asyncGetSessionsFailed = err => ({ type: GET_SESSIONS_FAIL, err });
