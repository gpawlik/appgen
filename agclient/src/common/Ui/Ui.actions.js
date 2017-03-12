import {
  UI_TOGGLE_NAVIGATION
} from './Ui.actionTypes';

export function toggleNavigation(toggleState) {
  return {
    type: UI_TOGGLE_NAVIGATION,
    toggleState
  };
}
