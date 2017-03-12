import {
  GET_USER_SUCCESS
} from './Users.actionTypes';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
};
