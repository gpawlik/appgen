import { combineReducers } from 'redux';

// Reducers
// TODO: unify user/users
import usersReducer from 'components/Users/Users.reducer';
import profileReducer from 'components/Users/User.reducer';
// TODO: unify event/events
import eventsReducer from 'components/Events/Events.reducer';
import eventReducer from 'components/Events/Event.reducer';
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
