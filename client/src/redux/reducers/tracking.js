import {
    STORE_SESSION_SUCCESS,
    STORE_SESSION_FAIL,
    GET_SESSIONS_SUCCESS,
    GET_SESSIONS_FAIL
} from '../constants';
const initialState = {
    currentSession: {},
    userSessions: [],
    err: ''
};

export const trackingReducers = (state = initialState, action) => {
    switch (action.type) {

        case STORE_SESSION_SUCCESS: {
            return { ...state };
        }
        case STORE_SESSION_FAIL: {
            return { ...state, err: action.err };
        }
        case GET_SESSIONS_SUCCESS: {
            return { ...state, userSessions: action.data };
        }
        case GET_SESSIONS_FAIL: {
            return { ...state, err: action.err };
        }
        default: {
            return state
        }
    }
    return state;
};
