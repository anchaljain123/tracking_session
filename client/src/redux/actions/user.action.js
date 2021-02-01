import {
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  LOADER_STARTED,
  SET_LOADING_TRUE,
  FETCH_CODES_SUCCESS,
  FETCH_CODES_FAILED,
  LOGOUT_USER
} from '../constants'

export const asyncloaderStarted = () => {
  return {
    type: SET_LOADING_TRUE
  }
};
export const asyncSaveUserSuccess = (data) => {
  return {
    type: SAVE_USER_SUCCESS, data,
  }
};

export const asyncSaveUserFailed = (err) => {
  return {
    type: SAVE_USER_FAILED, err,
  }
};

export const asyncCurrentUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS, data,
  }
};

export const asyncCurrentUserFailed = (err) => {
  return {
    type: FETCH_USER_FAILED, err,
  }
};

export const getCodesSuccess = (data) => {
  return {
    type: FETCH_CODES_SUCCESS, data,
  }
};

export const getCodesFailed = (err) => {
  return {
    type: FETCH_CODES_FAILED, err,
  }
};

export const logoutUser = (err) => {
  return {
    type: LOGOUT_USER
  }
};
