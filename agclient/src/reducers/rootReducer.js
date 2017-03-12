import { combineReducers } from 'redux';

// Reducers
import usersReducer from 'components/UsersArea/Users.reducer';
import profileReducer from 'components/UsersArea/User.reducer';
// TODO: unify event/events
import eventsReducer from 'components/EventsArea/Events.reducer';
import eventReducer from 'components/EventsArea/Event.reducer';
import flashReducer from 'common/Flash/Flash.reducer';
import authReducer from 'common/Auth/Auth.reducer';
import uiReducer from 'common/Ui/Ui.reducer';

// Combine Reducers
const rootReducer = combineReducers({
  usersState: usersReducer,
  profileState: profileReducer,
  eventsState: eventsReducer,
  eventState: eventReducer,
  flashState: flashReducer,
  authState: authReducer,
  uiState: uiReducer
});

export default rootReducer;
