import * as t from './types';

export function toggleNavigation(toggleState) {
  return {
    type: t.UI_TOGGLE_NAVIGATION,
    toggleState
  };
}
