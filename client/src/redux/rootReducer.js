import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { userReducers, trackingReducers } from './reducers';

export const rootReducer  =  combineReducers({
    form: formReducer,
    userReducers,
    trackingReducers
});
