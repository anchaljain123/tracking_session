import {
	asyncCurrentUserSuccess,
	asyncCurrentUserFailed,
	asyncloaderStarted,
	asyncSaveUserSuccess,
	asyncSaveUserFailed,
	getCodesSuccess,
	getCodesFailed
} from './user.action';

import fetch from 'isomorphic-fetch';
import { GET, POST } from '../../utils/fetchIntercept';

export const asyncLoginUser = (payload) => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return POST('/api/checkUser', payload)
			.then(({data}) => {
				if (data?._id) {
					dispatch(asyncCurrentUserSuccess(data));
					return data;
				} else {
					dispatch(asyncCurrentUserFailed('User Not Found'));
				}
			})
			.catch((err) => {
				dispatch(asyncCurrentUserFailed(err));
			});
	};
};

export const asyncSaveUser = (payload) => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return POST('/api/saveUser', payload)
			.then(({data}) => {
				dispatch(asyncSaveUserSuccess([data.user]));
			})
			.catch((err) => {
				dispatch(asyncSaveUserFailed(err));
			});
	};
};

export const getCodes = () => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return GET('https://github.com/login/oauth/authorize?client_id=361765a35479f026ec53')
			.then((res) => {
				res.json();
				fetch('https://api.github.com/search/code', {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					}
				}).then(res => console.log("res"))
			})
			.then((data) => {
				dispatch(getCodesSuccess(data));
			})
			.catch((err) => {
				dispatch(getCodesFailed(err));
			});
	};
};
