import {
  GET_EVENTS_SUCCESS,
  DELETE_EVENT_SUCCESS
} from './Events.actionTypes';

const initialState = {
  events: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.events });
    case DELETE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        events: state.events.filter(event => event._id !== action.eventId)
      });
    default:
      return state;
  }
};
