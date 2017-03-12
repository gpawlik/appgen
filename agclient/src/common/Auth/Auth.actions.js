import axios from 'axios';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser } from 'components/Users/Users.actions';

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const { token } = res.data;

      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
