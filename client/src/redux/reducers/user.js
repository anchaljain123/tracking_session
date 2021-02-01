import {
	SAVE_USER_SUCCESS,
	SAVE_USER_FAILED,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILED,
	SET_LOADING_TRUE,
	FETCH_CODES_SUCCESS,
	FETCH_CODES_FAILED,
	LOGOUT_USER
} from '../constants';

const initialState = {
	user: {},
	loading: true,
	err: '',
	codes: []
};

export const userReducers = (state = initialState, action) => {
	switch (action.type) {

		case SET_LOADING_TRUE:
			return {
				...state,
				loading: true,
			};

		case FETCH_USER_SUCCESS: {
			const users = action.data;
			return {
				...state,
				user: { ...users },
				loading: false,
			}
		}
		case FETCH_CODES_SUCCESS: {
			return {
				...state,
				codes: action.data,
				loading: false,
			}
		}
		case FETCH_USER_FAILED: {
			return {
				...state,
				err: action.err,
				loading: false,
			}
		}
		case FETCH_CODES_FAILED: {
			return {
				...state,
				err: action.err,
				loading: false,
			}
		}
		case SAVE_USER_SUCCESS: {
			return {
				...state,
				user: action.data,
				loading: false,
			}
		}
		case SAVE_USER_FAILED: {
			return {
				...state,
				err: action.err,
				loading: false,
			}
		}
		case LOGOUT_USER: {
			return initialState;
		}
		default: {
			return state
		}
	}
	return state;
};
