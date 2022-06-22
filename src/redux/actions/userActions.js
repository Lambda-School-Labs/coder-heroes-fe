import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS';
export const ERROR_ACTION = 'ERROR';

export const getCurrentUser = (idToken, oktaAuth) => async dispatch => {
  if (oktaAuth.isAuthenticated) {
    oktaAuth
      .getUser()
      .then(parsedJWT => {
        axiosWithAuth(idToken)
          .get(`/profiles/${parsedJWT.sub}`)
          .then(res => {
            dispatch({
              type: GET_CURRENT_USER,
              payload: res.data,
            });
          });
      })
      .catch(err => {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  }
};

// export const getConversations = () => dispatch => {
//   dispatch({ type: GET_CONVERSATIONS_ACTION });
//   axios
//     .get(`${process.env.REACT_APP_API_URI}/conversation_id/`)
//     .then(res => {
//       dispatch({ type: GET_CONVERSATIONS_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: SET_ERROR, payload: err });
//     });
// };

export const getInbox = dispatch => {
  dispatch({ type: GET_INBOX_ACTION });
  axios
    .get(`${process.env.REACT_APP_API_URI}/inbox/:profile_id`, {
      crossdomain: true,
    })
    .then(res => {
      dispatch({ type: GET_INBOX_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
