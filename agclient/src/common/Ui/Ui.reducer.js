import {
  UI_TOGGLE_NAVIGATION
} from './Ui.actionTypes';

const initialState = {
  isMobileNavigationOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UI_TOGGLE_NAVIGATION:
      const newState = action.toggleState !== 'undefined' ? action.toggleState : !state.isMobileNavigationOpen;

      return Object.assign({}, state, { isMobileNavigationOpen: newState });
    default: return state;
  }
};
