import {
  GET_EVENT_SUCCESS
} from './Events.actionTypes';

const initialState = {
  event: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_SUCCESS:
      return Object.assign({}, state, { event: action.event });
    default:
      return state;
  }
};
