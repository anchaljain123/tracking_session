import {
    asyncSessionSaveFailed,
    asyncSessionSaveSuccess,
    asyncGetSessionsSuccess,
    asyncGetSessionsFailed
} from './tracking.action';

import { POST } from '../../utils/fetchIntercept';

export const asyncSessionSave = payload => {
    return dispatch => {
        return POST('/api/tracking/save', payload)
            .then(({ data }) => {
                dispatch(asyncGetAllSessions({userid: payload.userid}))
            })
            .catch((err) => {
                dispatch(asyncSessionSaveFailed(err));
            });
    }
};

export const asyncGetAllSessions = payload => {
    return dispatch => {
        return POST('/api/tracking/get', payload)
            .then(({ data }) => {
                dispatch(asyncGetSessionsSuccess(data.sessions))
            })
            .catch((err) => {
                dispatch(asyncSessionSaveFailed(err));
            });
    }
};
